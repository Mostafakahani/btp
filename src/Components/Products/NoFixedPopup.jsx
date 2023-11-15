import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid, SvgIcon, Typography } from '@mui/material';
import Link from 'next/link';

const NoFixedPopup = () => {


    return (
        <>
            <Grid
                container
                sx={{
                    // position: 'fixed',
                    // bottom: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: { xs: '90%', xs: '100%', md: '90%' },
                    background: '#fff',
                    padding: 2,
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    // transform: 'translate(0%,-40%)',
                    borderRadius: '18px',
                    backgroundColor: '#1F2241',
                    flexDirection: { xs: 'column-reverse', sm: 'row-reverse' },
                }}
            >
                <Box sx={{ textAlign: { xs: 'center', sm: 'right' }, my: { xs: '15px', sm: '0' } }}>
                    <Typography sx={{ color: '#fff', fontWeight: 600, direction: 'rtl', fontSize: { xs: '17px', sm: '18px', md: '18px', lg: '24px' }, width: { sm: 'max-content' }, ml: { sm: '40px' } }}>
                        جهت دریافت مشاوره و یا استعلام قیمت محصولات با ما تماس بگیرید.
                    </Typography>
                </Box>
                <Link href={'/Contact'}>
                    <Button variant="contained" sx={{
                        color: '#1F2241', background: 'linear-gradient(270deg, #BF9D61 -12.46%, #F6D88C 111.69%)', fontWeight: 600, fontSize: { xs: '15px', md: '16px', lg: '20px' }, borderRadius: '13px', transition: '1s',
                        '&:hover': {
                            background: 'linear-gradient(270deg, #F6D88C -12.46%, #BF9D61 111.69%)',
                            transition: '1s',
                        }
                    }}>
                        ارتباط با ما
                        <SvgIcon sx={{ fontSize: '16px', ml: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M3.06738 14.6093H14.3032" stroke="#1F2241" stroke-width="1.38796" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.05957 2.38214L13.3126 11.6352" stroke="#1F2241" stroke-width="1.38796" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.05957 9.1699V2.38214H10.8473" stroke="#1F2241" stroke-width="1.38796" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </SvgIcon>
                    </Button>
                </Link>
            </Grid >


        </>
    );
};

export default NoFixedPopup;
