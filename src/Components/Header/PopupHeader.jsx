import React, { useState } from 'react';
import { Avatar, Dialog, DialogContentText, Grid, IconButton, Menu, MenuItem, ToggleButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const settings = [
    { text: "پروفایل", href: '/dashboard' },
    { text: "پشتیبانی تلگرام", href: '/tel' },
    { text: "خروج", href: '#' },
];

function SettingsMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
            >
                <Avatar alt="Avatar" src="/avatar.png" />
            </IconButton>

            <Dialog
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <DialogContentText sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '220px',
                    padding: '30px 10px',
                    borderRadius: "12px",
                    backgroundColor: "#313237",

                }}>

                    {settings.map((item, index) => (
                        <Link href={item.href} style={{ display: 'flex', flexDirection: 'column' }}>
                            <ToggleButton key={index} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: "#FF326F",
                                borderRadius: "12px",
                                p: "10px 5px",
                                transition: '0.3s',
                                ':hover': {
                                    transition: '0.3s'
                                },
                                mb: '10px'
                            }}>
                                <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='h6' sx={{
                                        textAlign: 'center', fontSize: '16px'
                                        ,
                                        color: "#FFFFFF",
                                    }}>
                                        {item.text}
                                    </Typography>
                                </Grid>
                            </ToggleButton>
                        </Link>
                    ))}
                </DialogContentText>
            </Dialog>
        </div>
    );
}

export default SettingsMenu;