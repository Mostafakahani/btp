import React from 'react';
import { useRouter } from 'next/router';
const products = [
    {
        id: 1,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/0101.png',
                img_InPage: '/ProductsImages/inPage/01.png',
                name_Persian: 'آسکوربیک اسید (ویتامین C)',
                name_English: 'Ascorbic Acid',
                category: 'اسید',
                weight: 'کیسه ۲۵ کیلوگرمی',
                url: '/images/avatar.png',
                packing: 25,
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'Zibo',
            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 2,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/02.png',
                img_InPage: '/ProductsImages/inPage/0202.png',
                name_Persian: 'دکستروز خشک',
                name_English: 'Dextrose Anhydrous',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'FIC',
                category: 'شیرین کننده ها',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 3,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/03.png',
                img_InPage: '/ProductsImages/inPage/0303.png',
                name_Persian: 'مونو دی گلیسیرید',
                name_English: 'Distilled Monoglyceride',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'FIC',
                category: 'امولسیفایر',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 4,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/04.png',
                img_InPage: '/ProductsImages/inPage/0404.png',
                name_Persian: 'گوراگام',
                name_English: 'Guar Gum',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'هند',
                lable: 'عبدالقادر',
                category: 'نگهدارنده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 5,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/05.png',
                img_InPage: '/ProductsImages/inPage/0505.png',
                name_Persian: 'مالتو دکسترین',
                name_English: 'Maltodextrin',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'FIC',
                category: 'شیرین کننده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 6,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/06.png',
                img_InPage: '/ProductsImages/inPage/0606.png',
                name_Persian: 'مونوسدیم گلوتامات',
                name_English: 'Monosodium Glutamate',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'شفاف',
                lable: 'FIC',
                category: 'طعم دهنده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 7,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/07.png',
                img_InPage: '/ProductsImages/inPage/0707.png',
                name_Persian: 'اسید فسفریک ۸۵ درصد',
                name_English: 'Phosphoric Acid 85%',
                weight: 'گالن ۳۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                type: 'شفاف',
                category: 'اسید',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 8,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/08.png',
                img_InPage: '/ProductsImages/inPage/0808.png',
                name_Persian: 'تترا سدیم پیروفسفات',
                name_English: 'Tetrasodium Pyrophosphate',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'Wengfu',
                category: 'فسفاته ها',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 9,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/09.png',
                img_InPage: '/ProductsImages/inPage/0909.png',
                name_Persian: 'پتاسیم هیدروکسید KOH چین',
                name_English: 'Potassium Hydroxide',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید صنعتی',
                country: 'چین',
                // lable: 'Wengfu',
                category: 'صنعتی',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 10,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/10.png',
                img_InPage: '/ProductsImages/inPage/1010.png',
                name_Persian: 'پتاسیم هیدروکسید KOH کره',
                name_English: 'Potassium Hydroxide',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید صنعتی',
                country: 'کره جنوبی',
                lable: 'Unid',
                category: 'صنعتی',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 11,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/11.png',
                img_InPage: '/ProductsImages/inPage/1111.png',
                name_Persian: 'جوش شیرین',
                name_English: 'Sodium Bicarbonate',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید صنعتی',
                country: 'ایران',
                lable: 'پرشیا',
                category: 'نمک',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 12,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/12.png',
                img_InPage: '/ProductsImages/inPage/1212.png',
                name_Persian: 'سیترات سدیم',
                name_English: 'Tridodium Citrate',
                weight: 'کیسه ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'TTCA',
                category: 'طعم دهنده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 13,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/13.png',
                img_InPage: '/ProductsImages/inPage/1313.png',
                name_Persian: 'اسید فسفریک ۸۵ درصد',
                name_English: 'Phosphoric Acid 85%',
                weight: 'مخزن ۱۶۵۰ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                type: 'شفاف',
                category: 'اسید',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 14,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/14.png',
                img_InPage: '/ProductsImages/inPage/1414.png',
                name_Persian: 'گلیسیرین',
                name_English: 'Glycerin',
                weight: 'بشکه ۲۵۰ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'مالزی',
                lable: 'KLK',
                category: 'امولسیفایر',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 15,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/15.png',
                img_InPage: '/ProductsImages/inPage/1515.png',
                name_Persian: 'سویا لسیتین',
                name_English: 'Soya Lecithin',
                weight: 'بشکه ۲۵۰ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'هند',
                lable: 'Keshav و Shivam',
                category: 'امولسیفایر',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 16,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/16.png',
                img_InPage: '/ProductsImages/inPage/1616.png',
                name_Persian: 'مونو پروپیلن گلایکول (MPG)',
                name_English: 'Propylene Glycol',
                weight: 'بشکه ۲۱۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی، دارویی (USP)',
                country: 'کره جنوبی',
                lable: 'SKY',
                category: 'نگهدارنده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 17,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/17.png',
                img_InPage: '/ProductsImages/inPage/1717.png',
                name_Persian: 'سوربات پتاسیم',
                name_English: 'Potassium Sorbate',
                weight: 'کارتن ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'FIC',
                category: 'نگهدارنده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 18,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/18.png',
                img_InPage: '/ProductsImages/inPage/1818.png',
                name_Persian: 'اسید لاکتیک',
                name_English: 'Lactic Acid',
                weight: 'گالن ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'FIC',
                category: 'اسید',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },
    {
        id: 19,
        data: [
            "#254",
            {
                img_Cover: '/ProductsImages/inPage/19.png',
                img_InPage: '/ProductsImages/inPage/1919.png',
                name_Persian: 'زانتان گام',
                name_English: 'Xanthan Gum',
                weight: 'کارتن ۲۵ کیلوگرمی',
                typeOfUse: 'گرید خوراکی',
                country: 'چین',
                lable: 'Fufeng',
                category: 'پایدار کننده',

            },
        ],
        inPage: [
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },
            {
                title: '',
                text: '',
            },

        ]
    },



    // Add more products
];
import Header from '@/Components/Header';
import { Box, Button, Grid, List, ListItem, SvgIcon, Typography } from '@mui/material';
import NoFixedPopup from '@/Components/Products/noFixedPopup';
import Head from 'next/head';
import Link from 'next/link';
import New from '@/Components/Products/New';
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
            <Head>
                <title>بازرگانی بارمان تجارت پایدار - {product.data[1].name_Persian}</title>
            </Head>
            <Grid container sx={{
                backgroundImage: `url('/bg2.png')`,
                backgroundSize: { xs: 'cover', sm: 'contain' },
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: '16px',
                // height: '100vh',
                flexDirection: 'column'
            }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'row', direction: 'rtl' }} id='top'>
                    <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <Box
                            component={'img'}
                            sx={{ width: { xs: '100%', sm: '70%' }, marginInline: { md: "150px", lg: 'auto' }, mt: { md: "150px", lg: '230px' } }}
                            src={product.data[1].img_InPage}
                        />
                    </Grid>
                    <Grid xs={12} md={6} container sx={{ display: 'flex', alignContent: 'center', mt: { xs: '100px', md: '0' } }}>
                        <Grid item md={12}>
                            <Typography variant='body2' sx={{ fontSize: { xs: "18px", sm: '20px' }, fontWeight: 200, color: '#727490' }}>محصولات / {product.data[1].category}</Typography>
                            <Typography variant='h1' sx={{ fontSize: { xs: "25px", sm: '35px' }, fontWeight: 800, color: '#1F2241', my: '15px' }}>{product.data[1].name_Persian}</Typography>
                            <Typography variant='body2' sx={{ fontSize: { xs: "18px", sm: '20px' }, fontWeight: 400, color: '#727490' }}> {product.data[1].name_English}</Typography>
                        </Grid>
                        <Grid item md={12} mt={5} sx={{ mx: { xs: '20px', md: '0px' } }}>
                            <Typography variant='body2' sx={{ fontSize: { xs: '25px', sm: '30px' }, fontWeight: 600, color: '#1F2241', my: '15px' }}>ویژگی ها</Typography>
                            <Grid>
                                <List sx={{ listStyleType: 'disc', direction: 'rtl' }}>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 400, color: '#727490', my: '15px', }}>
                                            دسته بندی: {' '}
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].category}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 400, color: '#727490', my: '15px', }}>
                                            گرید: {' '}
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].typeOfUse}
                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 400, color: '#727490', my: '15px', }}>
                                            بسته بندی: {' '}
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 600, color: '#1F2241', my: '15px', }}>

                                            {product.data[1].weight}

                                        </Typography>
                                    </ListItem>
                                    <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 400, color: '#727490', my: '15px', }}>
                                            کشور تولید کننده: {' '}
                                        </Typography>
                                        <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                            {product.data[1].country}
                                        </Typography>
                                    </ListItem>
                                    {product.data[1].lable || product.data[1].type ? (
                                        <ListItem sx={{ display: 'list-item', direction: 'rtl', textAlign: 'right' }}>
                                            <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 400, color: '#727490', my: '15px', }}>
                                                {product.data[1].lable ? 'برند محصول:' : product.data[1].type ? 'نوع محلول:' : ''}
                                                {' '}
                                            </Typography>
                                            <Typography variant='span' sx={{ fontSize: { xs: '16px', sm: '20px' }, fontWeight: 600, color: '#1F2241', my: '15px', }}>
                                                {/* {product.data[1].lable ? product.data[1].lable : product.data[1].type ? product.data[1].type : ''} */}
                                                {product.data[1].lable ?? product.data[1].type ?? ''}

                                            </Typography>
                                        </ListItem>
                                    ) : product.data[1].type ? 'نوع محلول:' : ''}
                                </List>
                                <Grid sx={{ mt: '35px', display: { xs: 'none', sm: 'block' } }}>
                                    <Button variant='h4' href='#down'
                                        sx={{ fontSize: { xs: '100%', sm: '15px', md: '23px' }, width: { sm: '100%', md: '90%' }, color: '#1F2241', textAlign: 'center', backgroundColor: '#1F22411A', borderRadius: '15px', p: '15px', m: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', fontWeight: { xs: 800, md: 600 } }}
                                    >
                                        {product.data[1].name_Persian} {' '}
                                        و کاربرد های آن را بیشتر بشناسید

                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                <path d="M23.5988 10.496L16.1083 17.9866C15.2236 18.8712 13.7761 18.8712 12.8915 17.9866L5.40088 10.496" stroke="#1F2241" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </SvgIcon>
                                    </Button>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid sx={{ mt: '35px', display: { xs: 'block', sm: 'none' } }}>
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
                </Grid >
                <div id='down' style={{ width: '100%', marginTop: '80px' }}>
                    <Grid container xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: "column-reverse", md: 'row' } }}>
                        <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                            <Button
                                href='#top'
                                sx={{
                                    backgroundColor: '#1F2241',
                                    borderRadius: '50%',
                                    width: '60px',
                                    height: '60px',
                                    '&:hover': {
                                        backgroundColor: '#2d3261'
                                    },
                                    mt: { xs: '15px', md: '0' },
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}

                            >
                                <SvgIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.7551 14.9865L13.3709 8.60228C12.617 7.84833 11.3832 7.84833 10.6293 8.60228L4.24512 14.9865" stroke="url(#paint0_linear_267_60)" stroke-width="1.70459" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_267_60" x1="21.6873" y1="11.549" x2="2.43209" y2="11.549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#BF9D61" />
                                                <stop offset="1" stop-color="#F6D88C" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </SvgIcon>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={11} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <NoFixedPopup />
                        </Grid>
                        {/* <Grid item xs={12} md={2}>
                                <Button
                                    href='#top'
                                    sx={{
                                        backgroundColor: '#1F2241',
                                        width: '80%',
                                        height: '100%',
                                        borderRadius: '18px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        px: '18px',
                                        mr: '50px',
                                        '&:hover': {
                                            backgroundColor: '#2d3261'
                                        }
                                    }}
                                >
                                    <Typography sx={{
                                        background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        fontWeight: 800,
                                        fontSize: { xs: '14px',sm: '10px', md: '19px' },
                                        textAlign: 'center',
                                    }}>
                                        مشاهده محصول
                                    </Typography>
                                    <SvgIcon>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M19.7551 14.9865L13.3709 8.60228C12.617 7.84833 11.3832 7.84833 10.6293 8.60228L4.24512 14.9865" stroke="url(#paint0_linear_267_60)" stroke-width="1.70459" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_267_60" x1="21.6873" y1="11.549" x2="2.43209" y2="11.549" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#BF9D61" />
                                                    <stop offset="1" stop-color="#F6D88C" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </SvgIcon>
                                </Button>
                            </Grid> */}
                    </Grid>
                    <Grid container my={5}>
                        <Grid item xs={12}>
                            <Box sx={{
                                position: 'relative',
                                textAlign: 'center',
                                width: '100%',
                                height: "80%",
                                borderRadius: '13px',
                                background: 'linear-gradient(to top, #BF9D61, #F6D88C)',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}>
                                <Box sx={{
                                    backgroundColor: '#1F2241',
                                    borderRadius: '25px',
                                    py: '20px',
                                    px: '40px',
                                    position: 'relative',
                                    bottom: '13%',
                                    margin: "auto",
                                    // transform: 'translate(-50%, -50%)',
                                    width: { xs: 'fit-content', md: '90%' },
                                    zIndex: 20
                                }} >
                                    <Typography sx={{
                                        background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        fontWeight: 800,
                                        fontSize: { xs: '20px', md: '2rem' },
                                        textAlign: 'center',
                                        marginBottom: '20px',

                                    }}>
                                        کربوکسی متیل سلولز چیست؟
                                    </Typography>
                                    <Box sx={{ my: '5px', position: 'relative' }}>
                                        <Box sx={{ color: '#fff', marginBottom: '10px' }}>
                                            <Typography variant='body2' sx={{ my: '12px', fontSize: { xs: '13px', md: '20px' }, color: '#fff', direction: 'rtl', textAlign: 'right', fontWeight: 200 }}>کربوکسی متیل سلولز (CMC) یک پلیمر آب‌محلول است که در صنایع مختلف مورد استفاده قرار می‌گیرد. این ماده به عنوان یک ماده سئو شده در سیستم‌های انتقال داده و بهبود داده‌های وب سایت‌ها نقش ایفا می‌کند. در ادامه به معرفی CMC و کاربردهای متعدد آن در صنایع مختلف می‌پردازیم. کربوکسی متیل سلولز (CMC) یک پلیمر هیدروکلوئیدی است که از سلولز به عنوان ماده اصلی تولید می‌شود. این ماده به واسطه ویژگی‌های خاص خود، از جمله حلالیت در آب و توانایی ایجاد رسوب متمرکز، در صنایع گوناگون مورد استفاده قرار می‌گیرد.</Typography>
                                            <hr style={{ border: '1px dashed rgba(255, 255, 255, 0.40)', width: '100%', marginTop: '5px' }} />
                                        </Box>
                                    </Box>
                                    <Typography sx={{
                                        background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        fontWeight: 800,
                                        fontSize: { xs: '20px', md: '2rem' },
                                        textAlign: 'center',
                                        marginBottom: '20px',

                                    }}>
                                        کاربرد های سی‌ام‌سی در صنایع مختلف
                                    </Typography>
                                    <Box sx={{ my: '5px', position: 'relative' }}>
                                        <Box sx={{ color: '#fff', marginBottom: '10px' }}>
                                            <Typography variant='body2' sx={{ my: '12px', fontSize: { xs: '13px', md: '20px' }, color: '#fff', direction: 'rtl', textAlign: 'right', fontWeight: 200 }}>
                                                ۱.صنایع غذایی:
                                                CMC به عنوان افزودنی غذایی مورد استفاده قرار می‌گیرد تا ترکیب‌پذیری و پایداری محصولات غذایی مثل بستنی، سس‌ها، و حبوبات افزایش یابد. در تولید مارشمالو و شکلات، CMC به عنوان ترکیبی برای ایجاد ساختار و افزودنی‌ها به‌کار می‌رود.
                                                <br />
                                                <br />
                                                ۲.صنایع دارویی:
                                                CMC به عنوان یک عامل آسان‌تجزیه در داروها و نوشیدنی‌های دارویی به کار می‌رود. این ماده در تولید قرص‌ها و محصولات دارویی به عنوان بایندر و دستگاه برش به‌کار می‌رود.
                                                <br />
                                                <br />
                                                ۳.صنایع نساجی و مواد شوینده:
                                                CMC در تولید مواد شوینده مانند مایع ظرفشویی و مایع ظرفشویی دستی به عنوان یک ماده استابیلیزه‌کننده و ضخیم‌کننده استفاده می‌شود. در صنایع نساجی، CMC به عنوان عامل محافظت از الیاف در فرآیندهای نمره‌دهی به کار می‌رود.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography sx={{
                                        background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        fontWeight: 800,
                                        fontSize: { xs: '20px', md: '2rem' },
                                        textAlign: 'center',
                                        marginBottom: '20px',

                                    }}>
                                        قیمت خرید و واردکننده کربوکسی متیل سلولز CMC چین
                                    </Typography>
                                    <Box sx={{ my: '5px', position: 'relative' }}>
                                        <Box sx={{ color: '#fff', marginBottom: '10px' }}>
                                            <Typography variant='body2' sx={{ my: '12px', fontSize: { xs: '13px', md: '20px' }, color: '#fff', direction: 'rtl', textAlign: 'right', fontWeight: 200 }}>
                                                قیمت کربوکسی متیل سلولز (CMC) ممکن است متغیر باشد و به عوامل مختلفی از جمله میزان تقاضا، کیفیت محصول، و واردکننده بستگی داشته باشد. واردکنندگان معتبر CMC معمولاً از کشورهایی مانند چین، هند، و تایوان هستند. برای دریافت اطلاعات دقیق در مورد قیمت و واردکنندگان CMC، بهتر است با تامین‌کنندگان مختلف تماس بگیرید و پیشنهادات و نقل‌وانتقالات را مقایسه کنید.
                                                <br />
                                                <br />
                                                در نهایت، CMC به عنوان یک ماده سئو شده در صنایع مختلف مورد استفاده قرار می‌گیرد و ویژگی‌های آن، از جمله حلالیت در آب و افزودنی‌ها، از آن یک ابزار مهم در تولید محصولات مختلف می‌سازد.CMC در تولید مواد شوینده مانند مایع ظرفشویی و مایع ظرفشویی دستی به عنوان یک ماده استابیلیزه‌کننده و ضخیم‌کننده استفاده می‌شود. در صنایع نساجی، CMC به عنوان عامل محافظت از الیاف در فرآیندهای نمره‌دهی به کار می‌رود.

                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* <New /> */}

                </div>
            </Grid >
        </>
    );
};

export default ProductDetails;
