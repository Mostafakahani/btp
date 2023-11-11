import React from 'react';
import { useRouter } from 'next/router';
import products from './ProductList'
import Header from '@/Components/Header';
import { Box, Button, Grid, List, ListItem, SvgIcon, Typography } from '@mui/material';
import NoFixedPopup from '@/Components/Products/noFixedPopup';
const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const product = products.find((p) => String(p.id) === id);
    // const product = products.map((p) => p);

    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Header />
            <Grid container sx={{
                backgroundImage: `url('/bg2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: '16px',
                // height: '100vh',
                flexDirection: 'column'
            }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'row', direction: 'rtl' }} id='top'>
                    <Grid xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component={'img'}
                            sx={{ width: { xs: '100%', sm: '90%' } }}
                            src={product.data[1].img_InPage}
                        />
                    </Grid>
                    <Grid xs={12} md={6} container sx={{ display: 'flex', alignContent: 'center' }}>
                        <Grid item md={12}>
                            <Typography variant='body2' sx={{ fontSize: '23px', fontWeight: 200, color: '#727490' }}>محصولات / {product.data[1].category}</Typography>
                            <Typography variant='h1' sx={{ fontSize: '38px', fontWeight: 800, color: '#1F2241', my: '15px' }}>{product.data[1].name_Persian}</Typography>
                            <Typography variant='body2' sx={{ fontSize: '23px', fontWeight: 400, color: '#727490' }}> {product.data[1].name_English}</Typography>
                        </Grid>
                        <Grid item md={12} mt={5}>
                            <Typography variant='body2' sx={{ fontSize: '38px', fontWeight: 800, color: '#1F2241', my: '15px' }}>ویژگی ها</Typography>
                            <Grid>
                                <List sx={{ listStyleType: 'disc', direction: 'rtl' }}>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 400, color: '#727490', my: '15px', }}>
                                            دسته بندی:
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].category}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 400, color: '#727490', my: '15px', }}>
                                            گرید:
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].typeOfUse}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 400, color: '#727490', my: '15px', }}>
                                            بسته بندی:
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            بسته
                                            {product.data[1].weight}
                                            کیلوگرمی
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 400, color: '#727490', my: '15px', }}>
                                            کشور تولید کننده:
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].country}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 400, color: '#727490', my: '15px', }}>
                                            برند محصول:
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: '24px', fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].lable}
                                        </Typography>
                                    </ListItem>
                                </List>
                                <Grid sx={{ mt: '35px' }}>
                                    <Button variant='h4' href='#down'
                                        sx={{ fontSize: { xs: '100%', md: '23px' }, width: '90%', color: '#1F2241', backgroundColor: '#1F22411A', borderRadius: '15px', p: '15px', m: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', fontWeight: { xs: 800, md: 600 } }}
                                    >
                                        کربوکسی متیل سلولز (CMC) و کاربرد های آن را بیشتر بشناسید

                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                <path d="M23.5988 10.496L16.1083 17.9866C15.2236 18.8712 13.7761 18.8712 12.8915 17.9866L5.40088 10.496" stroke="#1F2241" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </SvgIcon>
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <div id='down' style={{ width: '100%', marginTop: '80px' }}>
                        <Grid container md={12}>
                            <Grid item md={9}>
                                <NoFixedPopup />
                            </Grid>
                            <Grid item md={3}>
                            </Grid>
                        </Grid>
                        <Grid container xs={12}>

                        </Grid>

                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductDetails;
