import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ContactItems = ({ texts }) => {


    return (
        <Grid xs={12} md={4}>
            <Grid sx={{ backgroundColor: '#1F2241', display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', py: '20px', px: "28px", }}>
                <Box component={'img'} sx={{ borderRadius: "50%", width: '150px', height: 'auto' ,                backgroundPosition: 'center',
 }} src={texts.img} />
                <Typography sx={{
                    background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 800,
                    fontSize: '2rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    width: '100%'
                }}>
                    {texts.titleName}</Typography>
            </Grid>
        </Grid>
    );
}
export default ContactItems;