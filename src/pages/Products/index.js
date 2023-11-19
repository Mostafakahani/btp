// pages/index.js
import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, Typography, SvgIcon, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Header from '@/Components/Header';
import FixedPopup from '@/Components/Products/FixedPopup';
import { Search } from '@mui/icons-material';
import Link from 'next/link';

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
                weight: 'کارتن ۲۵ کیلوگرمی',
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
                country: 'چین',
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
                typeOfUse: 'گرید خوراکی',
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
import Head from 'next/head';
const categorys = [
    'اسید',
    'شیرین کننده ها',
    'امولسیفایر',
    'نگهدارنده',
    'شیرین کننده',
    'طعم دهنده',
    'فسفاته ها',
    'صنعتی',
    'پایدار کننده',
    'نمک'
]
const FullBorderedGrid = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = products.filter(
        (product) =>
            product.data[1].name_Persian.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === 'All' || product.data[1].category === selectedCategory)
    );


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };

    return (
        <>
            <Header />
            <Head>
                <title>بازرگانی بارمان تجارت پایدار - محصولات</title>
            </Head>
            <Grid container sx={{
                backgroundImage: `url('/bg2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: '16px',
                flexDirection: 'column',
            }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', my: '15px' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', }}>
                        <Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Grid item xs={12} md={6} sx={{ backgroundColor: '#fff', display: 'flex', borderRadius: '15px', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                                <Select value={selectedCategory} onChange={handleCategoryChange} sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    direction: 'rtl'
                                }}>
                                    <MenuItem value="All">همه دسته بندی ها</MenuItem>
                                    {
                                        categorys.map((x, index) => (
                                            <MenuItem sx={{ direction: 'rtl', display: "flex", flexDirection: 'column' }} key={index} value={x}>{x}</MenuItem>
                                        ))
                                    }
                                </Select>
                                <TextField
                                    placeholder="جستجو در بین محصولات"
                                    variant="outlined"
                                    fullWidth
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    sx={{
                                        // mb: 2,
                                        direction: 'rtl',
                                        '& .MuiOutlinedInput-input': {
                                            color: '#012964',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            color: '#012964',
                                        },
                                        backgroundColor: '#fff',
                                        borderRadius: '15px',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SvgIcon sx={{ color: '#012964' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <path d="M14.7941 26.4129C21.2638 26.4129 26.5086 21.1681 26.5086 14.6984C26.5086 8.22864 21.2638 2.98389 14.7941 2.98389C8.32435 2.98389 3.07959 8.22864 3.07959 14.6984C3.07959 21.1681 8.32435 26.4129 14.7941 26.4129Z" stroke="#012964" stroke-width="1.95242" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M25.1159 27.3107C25.8058 29.3933 27.3807 29.6016 28.5912 27.7793C29.6976 26.1133 28.9687 24.7466 26.9642 24.7466C25.4804 24.7336 24.6474 25.892 25.1159 27.3107Z" stroke="#012964" stroke-width="1.95242" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </SvgIcon>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box maxWidth={'lg'} sx={{ flexGrow: 1, p: 5, backgroundColor: '#fff', borderRadius: '30px', mb: '100px' }} >
                        <Grid
                            container
                            spacing={2}
                            sx={(theme) => ({
                                '--Grid-borderWidth': '1px',
                                borderTop: 'var(--Grid-borderWidth) dashed',
                                borderColor: 'divider',
                                '& > div': {
                                    borderRight: 'var(--Grid-borderWidth) dashed',
                                    borderBottom: 'var(--Grid-borderWidth) dashed',
                                    borderColor: 'divider',
                                    ...Object.keys(colWidth).reduce(
                                        (result, key) => ({
                                            ...result,
                                            [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                                                [theme.breakpoints.only(key)]: {
                                                    borderRight: 'none',
                                                },
                                            },
                                        }),
                                        {},
                                    ),
                                    '&:first-of-type': {
                                        // borderRight: 'none', // Remove right border for the first item
                                    },
                                    '&:nth-of-type(4n)': {
                                        borderRight: 'none', // Remove left border for the fourth item
                                    },
                                },
                            })}
                        >
                            {filteredProducts.map((product, index) => (
                                <Grid item key={product.id} {...colWidth} minHeight={160} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', transition: ".2s", '&:hover': { backgroundColor: '#f7f7f7', transition: ".5s" } }}>
                                    <Link href="/Products/[id]" as={`/Products/${product.id}`} passHref style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                        <Box component={'img'} src={product.data[1].img_Cover} sx={{ width: '200px', height: 'auto' }} />
                                        <Grid container justifyContent={'center'} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} mt={2}>
                                            <Typography sx={{ color: '#3D3F61', fontWeight: 800, direction: 'rtl', mt: '5px', textAlign: 'center' }}>{product.data[1].name_Persian}</Typography>

                                            <Grid container sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap', my: '10px', justifyContent: 'space-around', }}>
                                                <Grid container>
                                                    <Typography sx={{ display: 'flex', color: '#727490', fontWeight: 200, fontSize: '12px', alignItems: 'center', }}>
                                                        {product.data[1].typeOfUse}
                                                        {
                                                            product.data[1].typeOfUse === 'گرید خوراکی' || product.data[1].typeOfUse === 'گرید خوراکی، دارویی (USP)' ? (
                                                                <SvgIcon sx={{ ml: '3px', fontSize: '18px' }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                                        <path d="M5.48343 1.42468V16.9782M3.15039 1.81352V5.70191C3.15039 7.64611 5.48343 7.64611 5.48343 7.64611C5.48343 7.64611 7.81646 7.64611 7.81646 5.70191V1.81352M13.2602 7.64611V16.9782M13.2602 7.64611C14.5488 7.64611 15.5932 6.25329 15.5932 4.5354C15.5932 2.8175 14.5488 1.42468 13.2602 1.42468C11.9716 1.42468 10.9272 2.8175 10.9272 4.5354C10.9272 6.25329 11.9716 7.64611 13.2602 7.64611Z" stroke="#727491" stroke-width="1.0369" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </SvgIcon>
                                                            ) : product.data[1].typeOfUse === 'گرید صنعتی' ? (
                                                                <SvgIcon sx={{ ml: '3px', fontSize: '19px' }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                        <path d="M10.1334 12.9002C11.4686 12.9002 12.551 11.8178 12.551 10.4826C12.551 9.14745 11.4686 8.06506 10.1334 8.06506C8.7982 8.06506 7.71582 9.14745 7.71582 10.4826C7.71582 11.8178 8.7982 12.9002 10.1334 12.9002Z" stroke="#727491" stroke-width="0.721702" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M2.07471 11.1918V9.7735C2.07471 8.93541 2.75969 8.24237 3.60583 8.24237C5.06444 8.24237 5.66077 7.21088 4.92744 5.94568C4.50839 5.22041 4.75821 4.27756 5.49154 3.85851L6.88567 3.06071C7.5223 2.68196 8.34427 2.9076 8.72303 3.54423L8.81167 3.69734C9.53694 4.96253 10.7296 4.96253 11.4629 3.69734L11.5516 3.54423C11.9303 2.9076 12.7523 2.68196 13.3889 3.06071L14.7831 3.85851C15.5164 4.27756 15.7662 5.22041 15.3472 5.94568C14.6138 7.21088 15.2102 8.24237 16.6688 8.24237C17.5069 8.24237 18.1999 8.92735 18.1999 9.7735V11.1918C18.1999 12.0299 17.5149 12.7229 16.6688 12.7229C15.2102 12.7229 14.6138 13.7544 15.3472 15.0196C15.7662 15.753 15.5164 16.6878 14.7831 17.1068L13.3889 17.9046C12.7523 18.2833 11.9303 18.0577 11.5516 17.4211L11.4629 17.268C10.7377 16.0028 9.545 16.0028 8.81167 17.268L8.72303 17.4211C8.34427 18.0577 7.5223 18.2833 6.88567 17.9046L5.49154 17.1068C4.75821 16.6878 4.50839 15.7449 4.92744 15.0196C5.66077 13.7544 5.06444 12.7229 3.60583 12.7229C2.75969 12.7229 2.07471 12.0299 2.07471 11.1918Z" stroke="#727491" stroke-width="0.721702" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                </SvgIcon>
                                                            ) : (
                                                                <></>
                                                            )}
                                                    </Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography sx={{ display: 'flex', color: '#727490', fontWeight: 200, fontSize: '12px', alignItems: 'center', }}>
                                                        {product.data[1].weight}
                                                        {product.data[1].weight === 'کیسه ۲۵ کیلوگرمی' ? (
                                                            <SvgIcon sx={{ ml: '2px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path opacity="0.965" fill-rule="evenodd" clip-rule="evenodd" d="M3.46968 1.4134C7.87949 1.40736 12.2893 1.4134 16.6991 1.43149C16.8151 1.48682 16.8663 1.57731 16.8529 1.70296C16.8523 1.7802 16.8331 1.85259 16.7952 1.92013C16.4153 2.33798 16.0499 2.7663 15.6992 3.20506C16.1488 4.22148 16.45 5.27717 16.6029 6.37216C16.8577 8.29644 16.9218 10.2268 16.7952 12.1634C16.7027 13.6995 16.395 15.1956 15.8722 16.6516C15.8144 16.7669 15.7567 16.8815 15.6992 16.9955C16.0499 17.4342 16.4153 17.8626 16.7952 18.2804C16.8763 18.4354 16.8699 18.5862 16.776 18.7329C14.5486 18.775 12.3181 18.7931 10.0844 18.7872C7.87949 18.7811 5.67456 18.7751 3.46968 18.7691C3.35369 18.7137 3.30241 18.6232 3.31585 18.4976C3.31644 18.4204 3.33566 18.348 3.37353 18.2804C3.75348 17.8626 4.11884 17.4342 4.46957 16.9955C4.05271 16.0597 3.76428 15.0885 3.60428 14.0818C3.31328 12.0747 3.23636 10.0598 3.37353 8.03714C3.45339 6.82326 3.6585 5.62881 3.98885 4.4538C4.1113 4.02352 4.27156 3.60728 4.46957 3.20506C4.11884 2.7663 3.75348 2.33798 3.37353 1.92013C3.27449 1.72229 3.30654 1.55337 3.46968 1.4134ZM4.31574 2.02872C8.15504 1.98652 12.0008 1.98049 15.853 2.01062C15.6223 2.28812 15.3915 2.56561 15.1608 2.84311C14.6995 2.86121 14.238 2.86724 13.7763 2.86121C13.7763 3.05425 13.7763 3.24729 13.7763 3.44033C14.225 3.44033 14.6736 3.44033 15.1223 3.44033C15.7681 5.12222 16.1206 6.8596 16.1799 8.65246C16.3099 10.7591 16.1561 12.8464 15.7184 14.9143C15.6278 15.2794 15.5253 15.6413 15.4107 16.0001C15.2752 16.3514 15.1406 16.7013 15.0069 17.0498C15.0075 17.127 15.0267 17.1994 15.0646 17.2669C15.342 17.5641 15.6048 17.8718 15.853 18.1899C12.0073 18.2141 8.1615 18.2141 4.31574 18.1899C4.54649 17.9124 4.77723 17.6349 5.00798 17.3574C5.87958 17.3393 6.7513 17.3333 7.62309 17.3393C7.62309 17.1463 7.62309 16.9532 7.62309 16.7602C6.76422 16.7602 5.90531 16.7602 5.04644 16.7602C4.46842 15.2648 4.12872 13.7205 4.02731 12.1272C3.90079 10.2267 3.96489 8.33253 4.2196 6.44455C4.38131 5.41334 4.65694 4.41192 5.04644 3.44033C5.80278 3.44033 6.55909 3.44033 7.31543 3.44033C7.31543 3.24729 7.31543 3.05425 7.31543 2.86121C6.54617 2.86724 5.77701 2.86121 5.00798 2.84311C4.78112 2.56582 4.55037 2.29436 4.31574 2.02872Z" fill="#727491" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23926 16.7603C8.44435 16.7603 8.64948 16.7603 8.85458 16.7603C8.85458 16.9533 8.85458 17.1463 8.85458 17.3394C8.64948 17.3394 8.44435 17.3394 8.23926 17.3394C8.23926 17.1463 8.23926 16.9533 8.23926 16.7603Z" fill="#727491" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.4707 16.7603C9.6758 16.7603 9.88093 16.7603 10.086 16.7603C10.086 16.9533 10.086 17.1463 10.086 17.3394C9.88093 17.3394 9.6758 17.3394 9.4707 17.3394C9.4707 17.1463 9.4707 16.9533 9.4707 16.7603Z" fill="#727491" />
                                                                </svg>
                                                            </SvgIcon>
                                                        ) : product.data[1].weight === 'کارتن ۲۵ کیلوگرمی' ? (
                                                            <SvgIcon sx={{ ml: '2px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M10 17.8125C9.95312 17.8125 9.89062 17.7969 9.84375 17.7813L2.34375 15.125C2.15625 15.0625 2.03125 14.875 2.03125 14.6875V5.31254C2.03125 5.10941 2.15625 4.93754 2.34375 4.87504L9.84375 2.21879C10.0938 2.12504 10.3594 2.26566 10.4375 2.50004C10.5313 2.75004 10.3906 3.01566 10.1562 3.09379L2.96875 5.64066V14.3594L10.1562 16.9063C10.4062 17 10.5313 17.2657 10.4375 17.5C10.375 17.6875 10.1875 17.8125 10 17.8125Z" fill="#727490" />
                                                                    <path d="M17.5 5.3125L10 2.65625L17.5 5.3125ZM17.5 5.3125L10 2.65625L17.5 5.3125Z" fill="white" />
                                                                    <path d="M17.9688 5.29684C17.9688 5.28122 17.9688 5.24997 17.9688 5.23434V5.21872C17.9375 5.06247 17.8281 4.92184 17.6719 4.87497L13.9219 3.54684H13.9062C13.8125 3.51559 13.6875 3.49997 13.5781 3.54684L6.25 6.12497C6.0625 6.18747 5.9375 6.37497 5.9375 6.56247V8.28122C5.9375 8.54684 6.14062 8.74997 6.40625 8.74997C6.67188 8.74997 6.875 8.54684 6.875 8.28122V6.89059L13.7188 4.46872L16.0938 5.31247L9.84375 7.53122C9.65625 7.59372 9.53125 7.76559 9.53125 7.96872C9.53125 7.96872 9.53125 7.96872 9.53125 7.98434V16.7031L2.96875 14.3593V5.64059L10.1562 3.09372C10.4062 2.99997 10.5313 2.73434 10.4375 2.49997C10.3438 2.24997 10.0781 2.12497 9.84375 2.21872L2.34375 4.87497C2.15625 4.93747 2.03125 5.12497 2.03125 5.31247V14.6875C2.03125 14.8906 2.15625 15.0625 2.34375 15.125L9.84375 17.7812C9.89062 17.7968 9.95312 17.8125 10 17.8125C10.0469 17.8125 10.1094 17.7968 10.1562 17.7812L17.6562 15.125C17.8438 15.0625 17.9688 14.875 17.9688 14.6875V5.29684ZM17.0312 14.3593L10.4688 16.6875V8.29684L17.0312 5.96872V14.3593Z" fill="#727490" />
                                                                </svg>
                                                            </SvgIcon>
                                                        ) : product.data[1].weight === 'گالن ۳۵ کیلوگرمی' || product.data[1].weight === 'گالن ۲۵ کیلوگرمی' ? (
                                                            <SvgIcon sx={{ ml: '2px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                                                                    <g opacity="0.764">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46543 0C3.86128 0 4.25708 0 4.65293 0C4.65293 0.0791647 4.65293 0.158335 4.65293 0.2375C4.73208 0.2375 4.81128 0.2375 4.89043 0.2375C4.89043 0.316665 4.89043 0.395835 4.89043 0.475C4.96958 0.475 5.04878 0.475 5.12793 0.475C5.12793 0.7125 5.12793 0.95 5.12793 1.1875C5.20708 1.1875 5.28628 1.1875 5.36543 1.1875C5.36543 1.10834 5.36543 1.02916 5.36543 0.95C5.44458 0.95 5.52378 0.95 5.60293 0.95C5.60293 0.870835 5.60293 0.791665 5.60293 0.7125C5.68208 0.7125 5.76128 0.7125 5.84043 0.7125C5.84043 0.633335 5.84043 0.554165 5.84043 0.475C5.91958 0.475 5.99878 0.475 6.07793 0.475C6.07793 0.395835 6.07793 0.316665 6.07793 0.2375C6.15708 0.2375 6.23628 0.2375 6.31543 0.2375C6.31543 0.158335 6.31543 0.0791647 6.31543 0C9.00708 0 11.6988 0 14.3904 0C14.3904 0.0791647 14.3904 0.158335 14.3904 0.2375C14.5488 0.2375 14.7071 0.2375 14.8654 0.2375C14.8654 0.316665 14.8654 0.395835 14.8654 0.475C14.9446 0.475 15.0238 0.475 15.1029 0.475C15.1029 0.554165 15.1029 0.633335 15.1029 0.7125C15.1821 0.7125 15.2613 0.7125 15.3404 0.7125C15.3404 0.791665 15.3404 0.870835 15.3404 0.95C15.4196 0.95 15.4988 0.95 15.5779 0.95C15.5779 1.02916 15.5779 1.10834 15.5779 1.1875C15.6571 1.1875 15.7363 1.1875 15.8154 1.1875C15.8154 1.425 15.8154 1.6625 15.8154 1.9C15.8946 1.9 15.9738 1.9 16.0529 1.9C16.0529 7.125 16.0529 12.35 16.0529 17.575C15.9738 17.575 15.8946 17.575 15.8154 17.575C15.8154 17.8125 15.8154 18.05 15.8154 18.2875C15.7363 18.2875 15.6571 18.2875 15.5779 18.2875C15.5779 18.3666 15.5779 18.4459 15.5779 18.525C15.4988 18.525 15.4196 18.525 15.3404 18.525C15.3404 18.6041 15.3404 18.6834 15.3404 18.7625C15.1821 18.7625 15.0238 18.7625 14.8654 18.7625C14.8654 18.8416 14.8654 18.9209 14.8654 19C10.4321 19 5.99878 19 1.56543 19C1.56543 18.9209 1.56543 18.8416 1.56543 18.7625C1.40709 18.7625 1.24876 18.7625 1.09043 18.7625C1.09043 18.6834 1.09043 18.6041 1.09043 18.525C1.01126 18.525 0.932094 18.525 0.85293 18.525C0.85293 18.4459 0.85293 18.3666 0.85293 18.2875C0.773765 18.2875 0.694594 18.2875 0.61543 18.2875C0.61543 18.05 0.61543 17.8125 0.61543 17.575C0.536265 17.575 0.457094 17.575 0.37793 17.575C0.37793 13.775 0.37793 9.975 0.37793 6.175C0.457094 6.175 0.536265 6.175 0.61543 6.175C0.61543 6.01665 0.61543 5.85835 0.61543 5.7C0.694594 5.7 0.773765 5.7 0.85293 5.7C0.85293 5.62085 0.85293 5.54165 0.85293 5.4625C0.932094 5.4625 1.01126 5.4625 1.09043 5.4625C1.09043 5.38335 1.09043 5.30415 1.09043 5.225C1.16959 5.225 1.24876 5.225 1.32793 5.225C1.32793 5.14585 1.32793 5.06665 1.32793 4.9875C1.40709 4.9875 1.48626 4.9875 1.56543 4.9875C1.56543 4.82915 1.56543 4.67085 1.56543 4.5125C1.32793 4.5125 1.09043 4.5125 0.85293 4.5125C0.85293 4.43335 0.85293 4.35415 0.85293 4.275C0.773765 4.275 0.694594 4.275 0.61543 4.275C0.61543 4.19585 0.61543 4.11665 0.61543 4.0375C0.536265 4.0375 0.457094 4.0375 0.37793 4.0375C0.37793 3.72085 0.37793 3.40416 0.37793 3.0875C0.457094 3.0875 0.536265 3.0875 0.61543 3.0875C0.61543 3.00834 0.61543 2.92916 0.61543 2.85C0.694594 2.85 0.773765 2.85 0.85293 2.85C0.85293 2.77084 0.85293 2.69166 0.85293 2.6125C0.932094 2.6125 1.01126 2.6125 1.09043 2.6125C1.09043 2.53334 1.09043 2.45416 1.09043 2.375C1.16959 2.375 1.24876 2.375 1.32793 2.375C1.32793 2.29584 1.32793 2.21666 1.32793 2.1375C1.40709 2.1375 1.48626 2.1375 1.56543 2.1375C1.56543 2.05834 1.56543 1.97916 1.56543 1.9C1.64459 1.9 1.72377 1.9 1.80293 1.9C1.80293 1.82084 1.80293 1.74166 1.80293 1.6625C1.88209 1.6625 1.96126 1.6625 2.04043 1.6625C2.04043 1.58334 2.04043 1.50416 2.04043 1.425C2.11959 1.425 2.19876 1.425 2.27793 1.425C2.27793 1.34584 2.27793 1.26666 2.27793 1.1875C2.35708 1.1875 2.43628 1.1875 2.51543 1.1875C2.51543 1.10834 2.51543 1.02916 2.51543 0.95C2.59458 0.95 2.67378 0.95 2.75293 0.95C2.75293 0.870835 2.75293 0.791665 2.75293 0.7125C2.83208 0.7125 2.91128 0.7125 2.99043 0.7125C2.99043 0.633335 2.99043 0.554165 2.99043 0.475C3.06958 0.475 3.14878 0.475 3.22793 0.475C3.22793 0.395835 3.22793 0.316665 3.22793 0.2375C3.30708 0.2375 3.38628 0.2375 3.46543 0.2375C3.46543 0.158335 3.46543 0.0791647 3.46543 0ZM3.94043 0.7125C4.01958 0.7125 4.09878 0.7125 4.17793 0.7125C4.17793 0.95 4.17793 1.1875 4.17793 1.425C4.01958 1.425 3.86128 1.425 3.70293 1.425C3.70293 1.6625 3.70293 1.9 3.70293 2.1375C3.94043 2.1375 4.17793 2.1375 4.41543 2.1375C4.41543 1.97916 4.41543 1.82084 4.41543 1.6625C4.49458 1.6625 4.57378 1.6625 4.65293 1.6625C4.65293 1.74166 4.65293 1.82084 4.65293 1.9C4.73208 1.9 4.81128 1.9 4.89043 1.9C4.89043 1.97916 4.89043 2.05834 4.89043 2.1375C4.96958 2.1375 5.04878 2.1375 5.12793 2.1375C5.12793 2.21666 5.12793 2.29584 5.12793 2.375C5.20708 2.375 5.28628 2.375 5.36543 2.375C5.36543 2.29584 5.36543 2.21666 5.36543 2.1375C5.44458 2.1375 5.52378 2.1375 5.60293 2.1375C5.60293 2.05834 5.60293 1.97916 5.60293 1.9C5.68208 1.9 5.76128 1.9 5.84043 1.9C5.84043 1.82084 5.84043 1.74166 5.84043 1.6625C5.91958 1.6625 5.99878 1.6625 6.07793 1.6625C6.07793 1.58334 6.07793 1.50416 6.07793 1.425C6.15708 1.425 6.23628 1.425 6.31543 1.425C6.31543 1.34584 6.31543 1.26666 6.31543 1.1875C6.39458 1.1875 6.47378 1.1875 6.55293 1.1875C6.55293 1.10834 6.55293 1.02916 6.55293 0.95C6.71128 0.95 6.86958 0.95 7.02793 0.95C7.02793 0.870835 7.02793 0.791665 7.02793 0.7125C9.32378 0.7125 11.6196 0.7125 13.9154 0.7125C13.9154 0.791665 13.9154 0.870835 13.9154 0.95C14.0738 0.95 14.2321 0.95 14.3904 0.95C14.3904 1.02916 14.3904 1.10834 14.3904 1.1875C14.4696 1.1875 14.5488 1.1875 14.6279 1.1875C14.6279 1.26666 14.6279 1.34584 14.6279 1.425C14.7071 1.425 14.7863 1.425 14.8654 1.425C14.8654 1.58334 14.8654 1.74166 14.8654 1.9C14.9446 1.9 15.0238 1.9 15.1029 1.9C15.1029 2.21666 15.1029 2.53334 15.1029 2.85C15.1623 2.85 15.2217 2.85 15.2811 2.85C15.2811 7.52085 15.2811 12.1916 15.2811 16.8625C15.2217 16.8625 15.1623 16.8625 15.1029 16.8625C15.1029 17.1 15.1029 17.3375 15.1029 17.575C15.0238 17.575 14.9446 17.575 14.8654 17.575C14.8654 17.6541 14.8654 17.7334 14.8654 17.8125C14.7863 17.8125 14.7071 17.8125 14.6279 17.8125C14.6279 17.8916 14.6279 17.9709 14.6279 18.05C14.5488 18.05 14.4696 18.05 14.3904 18.05C14.3904 18.1094 14.3904 18.1687 14.3904 18.2281C10.2738 18.3073 6.15708 18.3073 2.04043 18.2281C2.04043 18.1687 2.04043 18.1094 2.04043 18.05C1.96126 18.05 1.88209 18.05 1.80293 18.05C1.80293 17.9709 1.80293 17.8916 1.80293 17.8125C1.72377 17.8125 1.64459 17.8125 1.56543 17.8125C1.56543 17.7334 1.56543 17.6541 1.56543 17.575C1.48626 17.575 1.40709 17.575 1.32793 17.575C1.32793 17.3375 1.32793 17.1 1.32793 16.8625C1.24876 16.8625 1.16959 16.8625 1.09043 16.8625C1.09043 13.6166 1.09043 10.3709 1.09043 7.125C1.16959 7.125 1.24876 7.125 1.32793 7.125C1.32793 6.80835 1.32793 6.49165 1.32793 6.175C1.40709 6.175 1.48626 6.175 1.56543 6.175C1.56543 6.09585 1.56543 6.01665 1.56543 5.9375C1.64459 5.9375 1.72377 5.9375 1.80293 5.9375C1.80293 5.85835 1.80293 5.77915 1.80293 5.7C1.88209 5.7 1.96126 5.7 2.04043 5.7C2.04043 5.62085 2.04043 5.54165 2.04043 5.4625C2.11959 5.4625 2.19876 5.4625 2.27793 5.4625C2.27793 5.38335 2.27793 5.30415 2.27793 5.225C2.35708 5.225 2.43628 5.225 2.51543 5.225C2.51543 5.14585 2.51543 5.06665 2.51543 4.9875C2.59458 4.9875 2.67378 4.9875 2.75293 4.9875C2.75293 4.82915 2.75293 4.67085 2.75293 4.5125C2.67378 4.5125 2.59458 4.5125 2.51543 4.5125C2.51543 4.43335 2.51543 4.35415 2.51543 4.275C2.43628 4.275 2.35708 4.275 2.27793 4.275C2.27793 4.19585 2.27793 4.11665 2.27793 4.0375C2.35708 4.0375 2.43628 4.0375 2.51543 4.0375C2.51543 3.95835 2.51543 3.87915 2.51543 3.8C2.59458 3.8 2.67378 3.8 2.75293 3.8C2.75293 3.64165 2.75293 3.48334 2.75293 3.325C2.67378 3.325 2.59458 3.325 2.51543 3.325C2.51543 3.24584 2.51543 3.16666 2.51543 3.0875C2.35708 3.0875 2.19876 3.0875 2.04043 3.0875C2.04043 3.16666 2.04043 3.24584 2.04043 3.325C1.96126 3.325 1.88209 3.325 1.80293 3.325C1.80293 3.40416 1.80293 3.48334 1.80293 3.5625C1.72377 3.5625 1.64459 3.5625 1.56543 3.5625C1.56543 3.64165 1.56543 3.72085 1.56543 3.8C1.48626 3.8 1.40709 3.8 1.32793 3.8C1.32793 3.64165 1.32793 3.48334 1.32793 3.325C1.40709 3.325 1.48626 3.325 1.56543 3.325C1.56543 3.24584 1.56543 3.16666 1.56543 3.0875C1.64459 3.0875 1.72377 3.0875 1.80293 3.0875C1.80293 3.00834 1.80293 2.92916 1.80293 2.85C1.88209 2.85 1.96126 2.85 2.04043 2.85C2.04043 2.77084 2.04043 2.69166 2.04043 2.6125C2.11959 2.6125 2.19876 2.6125 2.27793 2.6125C2.27793 2.53334 2.27793 2.45416 2.27793 2.375C2.35708 2.375 2.43628 2.375 2.51543 2.375C2.51543 2.29584 2.51543 2.21666 2.51543 2.1375C2.59458 2.1375 2.67378 2.1375 2.75293 2.1375C2.75293 2.05834 2.75293 1.97916 2.75293 1.9C2.83208 1.9 2.91128 1.9 2.99043 1.9C2.99043 1.82084 2.99043 1.74166 2.99043 1.6625C3.06958 1.6625 3.14878 1.6625 3.22793 1.6625C3.22793 1.58334 3.22793 1.50416 3.22793 1.425C3.30708 1.425 3.38628 1.425 3.46543 1.425C3.46543 1.34584 3.46543 1.26666 3.46543 1.1875C3.54458 1.1875 3.62378 1.1875 3.70293 1.1875C3.70293 1.10834 3.70293 1.02916 3.70293 0.95C3.78208 0.95 3.86128 0.95 3.94043 0.95C3.94043 0.870835 3.94043 0.791665 3.94043 0.7125Z" fill="#727490" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.92793 1.425C10.6696 1.425 12.4113 1.425 14.1529 1.425C14.1529 1.50416 14.1529 1.58334 14.1529 1.6625C14.2321 1.6625 14.3113 1.6625 14.3904 1.6625C14.3904 1.82084 14.3904 1.97916 14.3904 2.1375C14.4696 2.1375 14.5488 2.1375 14.6279 2.1375C14.6279 2.375 14.6279 2.6125 14.6279 2.85C14.5488 2.85 14.4696 2.85 14.3904 2.85C14.3904 3.00834 14.3904 3.16666 14.3904 3.325C14.3113 3.325 14.2321 3.325 14.1529 3.325C14.1529 3.40416 14.1529 3.48334 14.1529 3.5625C12.3321 3.5625 10.5113 3.5625 8.69043 3.5625C8.67066 3.40416 8.65083 3.24584 8.63105 3.0875C8.57168 3.0875 8.5123 3.0875 8.45293 3.0875C8.37378 2.69166 8.37378 2.29584 8.45293 1.9C8.53208 1.9 8.61128 1.9 8.69043 1.9C8.69043 1.82084 8.69043 1.74166 8.69043 1.6625C8.76958 1.6625 8.84878 1.6625 8.92793 1.6625C8.92793 1.58334 8.92793 1.50416 8.92793 1.425ZM9.40293 2.1375C9.40293 2.21666 9.40293 2.29584 9.40293 2.375C9.32378 2.375 9.24458 2.375 9.16543 2.375C9.16543 2.45416 9.16543 2.53334 9.16543 2.6125C9.24458 2.6125 9.32378 2.6125 9.40293 2.6125C9.40293 2.69166 9.40293 2.77084 9.40293 2.85C10.8082 2.85 12.2133 2.85 13.6186 2.85C13.6383 2.69166 13.6582 2.53334 13.6779 2.375C13.5988 2.375 13.5196 2.375 13.4404 2.375C13.4404 2.29584 13.4404 2.21666 13.4404 2.1375C12.0946 2.1375 10.7488 2.1375 9.40293 2.1375Z" fill="#727490" />
                                                                    </g>
                                                                </svg>
                                                            </SvgIcon>
                                                        ) : product.data[1].weight === 'بشکه ۲۵۰ کیلوگرمی' || product.data[1].weight === 'بشکه ۲۱۵ کیلوگرمی' ? (
                                                            <SvgIcon sx={{ ml: '2px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                                    <g clip-path="url(#clip0_378_300)">
                                                                        <path opacity="0.798" fill-rule="evenodd" clip-rule="evenodd" d="M7.674 -0.0237427C9.44732 -0.0237427 11.2207 -0.0237427 12.994 -0.0237427C12.994 0.0395906 12.994 0.102924 12.994 0.166257C13.3107 0.166257 13.6273 0.166257 13.944 0.166257C13.944 0.229591 13.944 0.292924 13.944 0.356257C14.1973 0.356257 14.4507 0.356257 14.704 0.356257C14.704 0.419591 14.704 0.482926 14.704 0.546257C14.894 0.546257 15.084 0.546257 15.274 0.546257C15.274 0.609589 15.274 0.672926 15.274 0.736257C15.4007 0.736257 15.5273 0.736257 15.654 0.736257C15.654 0.799589 15.654 0.862926 15.654 0.926257C15.844 0.926257 16.034 0.926257 16.224 0.926257C16.224 0.989589 16.224 1.05293 16.224 1.11626C16.3507 1.11626 16.4773 1.11626 16.604 1.11626C16.604 1.17959 16.604 1.24293 16.604 1.30626C16.6673 1.30626 16.7307 1.30626 16.794 1.30626C16.794 1.36959 16.794 1.43293 16.794 1.49626C16.9207 1.49626 17.0473 1.49626 17.174 1.49626C17.174 1.55959 17.174 1.62293 17.174 1.68626C17.2373 1.68626 17.3007 1.68626 17.364 1.68626C17.364 1.74959 17.364 1.81293 17.364 1.87626C17.4273 1.87626 17.4907 1.87626 17.554 1.87626C17.554 1.93959 17.554 2.00293 17.554 2.06626C17.6173 2.06626 17.6807 2.06626 17.744 2.06626C17.744 2.12959 17.744 2.19293 17.744 2.25626C17.8073 2.25626 17.8707 2.25626 17.934 2.25626C17.934 2.31959 17.934 2.38293 17.934 2.44626C17.9973 2.44626 18.0607 2.44626 18.124 2.44626C18.124 2.57293 18.124 2.69959 18.124 2.82626C18.1873 2.82626 18.2507 2.82626 18.314 2.82626C18.314 3.45959 18.314 4.09293 18.314 4.72626C18.2507 4.72626 18.1873 4.72626 18.124 4.72626C18.124 4.85294 18.124 4.97957 18.124 5.10626C18.0607 5.10626 17.9973 5.10626 17.934 5.10626C17.934 6.18294 17.934 7.25957 17.934 8.33626C17.9973 8.33626 18.0607 8.33626 18.124 8.33626C18.124 8.39957 18.124 8.46294 18.124 8.52626C18.1873 8.52626 18.2507 8.52626 18.314 8.52626C18.314 9.15957 18.314 9.79294 18.314 10.4263C18.2507 10.4263 18.1873 10.4263 18.124 10.4263C18.124 10.5529 18.124 10.6796 18.124 10.8063C18.0607 10.8063 17.9973 10.8063 17.934 10.8063C17.934 11.8829 17.934 12.9596 17.934 14.0363C17.9973 14.0363 18.0607 14.0363 18.124 14.0363C18.124 14.0996 18.124 14.1629 18.124 14.2263C18.1873 14.2263 18.2507 14.2263 18.314 14.2263C18.314 14.8596 18.314 15.4929 18.314 16.1263C18.2507 16.1263 18.1873 16.1263 18.124 16.1263C18.124 16.2529 18.124 16.3796 18.124 16.5063C18.0607 16.5063 17.9973 16.5063 17.934 16.5063C17.934 16.5696 17.934 16.6329 17.934 16.6963C17.8707 16.6963 17.8073 16.6963 17.744 16.6963C17.744 16.7596 17.744 16.8229 17.744 16.8863C17.6807 16.8863 17.6173 16.8863 17.554 16.8863C17.554 16.9496 17.554 17.0129 17.554 17.0763C17.4907 17.0763 17.4273 17.0763 17.364 17.0763C17.364 17.1396 17.364 17.2029 17.364 17.2663C17.3007 17.2663 17.2373 17.2663 17.174 17.2663C17.174 17.3296 17.174 17.3929 17.174 17.4563C17.0473 17.4563 16.9207 17.4563 16.794 17.4563C16.794 17.5196 16.794 17.5829 16.794 17.6463C16.7307 17.6463 16.6673 17.6463 16.604 17.6463C16.604 17.7096 16.604 17.7729 16.604 17.8363C16.4773 17.8363 16.3507 17.8363 16.224 17.8363C16.224 17.8996 16.224 17.9629 16.224 18.0263C16.034 18.0263 15.844 18.0263 15.654 18.0263C15.654 18.0896 15.654 18.1529 15.654 18.2163C15.5273 18.2163 15.4007 18.2163 15.274 18.2163C15.274 18.2796 15.274 18.3429 15.274 18.4063C15.084 18.4063 14.894 18.4063 14.704 18.4063C14.704 18.4696 14.704 18.5329 14.704 18.5963C14.4507 18.5963 14.1973 18.5963 13.944 18.5963C13.944 18.6596 13.944 18.7229 13.944 18.7863C13.564 18.7863 13.184 18.7863 12.804 18.7863C12.804 18.8496 12.804 18.9129 12.804 18.9763C11.1573 18.9763 9.51069 18.9763 7.864 18.9763C7.864 18.9129 7.864 18.8496 7.864 18.7863C7.484 18.7863 7.104 18.7863 6.724 18.7863C6.724 18.7229 6.724 18.6596 6.724 18.5963C6.47069 18.5963 6.21732 18.5963 5.964 18.5963C5.964 18.5329 5.964 18.4696 5.964 18.4063C5.774 18.4063 5.584 18.4063 5.394 18.4063C5.394 18.3429 5.394 18.2796 5.394 18.2163C5.26734 18.2163 5.14067 18.2163 5.014 18.2163C5.014 18.1529 5.014 18.0896 5.014 18.0263C4.824 18.0263 4.634 18.0263 4.444 18.0263C4.444 17.9629 4.444 17.8996 4.444 17.8363C4.31734 17.8363 4.19067 17.8363 4.064 17.8363C4.064 17.7729 4.064 17.7096 4.064 17.6463C4.00067 17.6463 3.93734 17.6463 3.874 17.6463C3.874 17.5829 3.874 17.5196 3.874 17.4563C3.74734 17.4563 3.62067 17.4563 3.494 17.4563C3.494 17.3929 3.494 17.3296 3.494 17.2663C3.43067 17.2663 3.36734 17.2663 3.304 17.2663C3.304 17.2029 3.304 17.1396 3.304 17.0763C3.24067 17.0763 3.17734 17.0763 3.114 17.0763C3.114 17.0129 3.114 16.9496 3.114 16.8863C3.05067 16.8863 2.98734 16.8863 2.924 16.8863C2.924 16.8229 2.924 16.7596 2.924 16.6963C2.86067 16.6963 2.79734 16.6963 2.734 16.6963C2.734 16.6329 2.734 16.5696 2.734 16.5063C2.67067 16.5063 2.60734 16.5063 2.544 16.5063C2.544 16.3796 2.544 16.2529 2.544 16.1263C2.48067 16.1263 2.41734 16.1263 2.354 16.1263C2.354 15.4929 2.354 14.8596 2.354 14.2263C2.41734 14.2263 2.48067 14.2263 2.544 14.2263C2.544 14.1629 2.544 14.0996 2.544 14.0363C2.60734 14.0363 2.67067 14.0363 2.734 14.0363C2.734 12.9596 2.734 11.8829 2.734 10.8063C2.67067 10.8063 2.60734 10.8063 2.544 10.8063C2.544 10.6796 2.544 10.5529 2.544 10.4263C2.48067 10.4263 2.41734 10.4263 2.354 10.4263C2.354 9.79294 2.354 9.15957 2.354 8.52626C2.41734 8.52626 2.48067 8.52626 2.544 8.52626C2.544 8.46294 2.544 8.39957 2.544 8.33626C2.60734 8.33626 2.67067 8.33626 2.734 8.33626C2.734 7.25957 2.734 6.18294 2.734 5.10626C2.67067 5.10626 2.60734 5.10626 2.544 5.10626C2.544 4.97957 2.544 4.85294 2.544 4.72626C2.48067 4.72626 2.41734 4.72626 2.354 4.72626C2.354 4.09293 2.354 3.45959 2.354 2.82626C2.41734 2.82626 2.48067 2.82626 2.544 2.82626C2.544 2.69959 2.544 2.57293 2.544 2.44626C2.60734 2.44626 2.67067 2.44626 2.734 2.44626C2.734 2.38293 2.734 2.31959 2.734 2.25626C2.79734 2.25626 2.86067 2.25626 2.924 2.25626C2.924 2.19293 2.924 2.12959 2.924 2.06626C2.98734 2.06626 3.05067 2.06626 3.114 2.06626C3.114 2.00293 3.114 1.93959 3.114 1.87626C3.17734 1.87626 3.24067 1.87626 3.304 1.87626C3.304 1.81293 3.304 1.74959 3.304 1.68626C3.36734 1.68626 3.43067 1.68626 3.494 1.68626C3.494 1.62293 3.494 1.55959 3.494 1.49626C3.62067 1.49626 3.74734 1.49626 3.874 1.49626C3.874 1.43293 3.874 1.36959 3.874 1.30626C3.93734 1.30626 4.00067 1.30626 4.064 1.30626C4.064 1.24293 4.064 1.17959 4.064 1.11626C4.19067 1.11626 4.31734 1.11626 4.444 1.11626C4.444 1.05293 4.444 0.989589 4.444 0.926257C4.634 0.926257 4.824 0.926257 5.014 0.926257C5.014 0.862926 5.014 0.799589 5.014 0.736257C5.14067 0.736257 5.26734 0.736257 5.394 0.736257C5.394 0.672926 5.394 0.609589 5.394 0.546257C5.584 0.546257 5.774 0.546257 5.964 0.546257C5.964 0.482926 5.964 0.419591 5.964 0.356257C6.21732 0.356257 6.47069 0.356257 6.724 0.356257C6.724 0.292924 6.724 0.229591 6.724 0.166257C7.04069 0.166257 7.35732 0.166257 7.674 0.166257C7.674 0.102924 7.674 0.0395906 7.674 -0.0237427ZM10.144 0.736257C10.2707 0.736257 10.3973 0.736257 10.524 0.736257C10.524 0.799589 10.524 0.862926 10.524 0.926257C11.284 0.926257 12.044 0.926257 12.804 0.926257C12.804 0.989589 12.804 1.05293 12.804 1.11626C13.1207 1.11626 13.4373 1.11626 13.754 1.11626C13.754 1.17959 13.754 1.24293 13.754 1.30626C13.944 1.30626 14.134 1.30626 14.324 1.30626C14.324 1.36959 14.324 1.43293 14.324 1.49626C14.514 1.49626 14.704 1.49626 14.894 1.49626C14.894 1.55959 14.894 1.62293 14.894 1.68626C15.084 1.68626 15.274 1.68626 15.464 1.68626C15.464 1.74959 15.464 1.81293 15.464 1.87626C15.5907 1.87626 15.7173 1.87626 15.844 1.87626C15.844 1.93959 15.844 2.00293 15.844 2.06626C15.9707 2.06626 16.0973 2.06626 16.224 2.06626C16.224 2.12959 16.224 2.19293 16.224 2.25626C16.2873 2.25626 16.3507 2.25626 16.414 2.25626C16.414 2.31959 16.414 2.38293 16.414 2.44626C16.4773 2.44626 16.5407 2.44626 16.604 2.44626C16.604 2.50959 16.604 2.57293 16.604 2.63626C16.7148 2.63626 16.8257 2.63626 16.9365 2.63626C16.9523 2.76293 16.9682 2.88959 16.984 3.01626C17.0473 3.01626 17.1107 3.01626 17.174 3.01626C17.174 3.07959 17.174 3.14293 17.174 3.20626C17.2215 3.20626 17.269 3.20626 17.3165 3.20626C17.3798 3.58626 17.3798 3.96626 17.3165 4.34626C17.269 4.34626 17.2215 4.34626 17.174 4.34626C17.174 4.40959 17.174 4.47293 17.174 4.53626C17.1107 4.53626 17.0473 4.53626 16.984 4.53626C16.9682 4.66293 16.9523 4.78957 16.9365 4.91626C16.8257 4.91626 16.7148 4.91626 16.604 4.91626C16.604 4.97957 16.604 5.04294 16.604 5.10626C16.5407 5.10626 16.4773 5.10626 16.414 5.10626C16.414 5.16957 16.414 5.23294 16.414 5.29626C16.3507 5.29626 16.2873 5.29626 16.224 5.29626C16.224 5.35957 16.224 5.42294 16.224 5.48626C16.0973 5.48626 15.9707 5.48626 15.844 5.48626C15.844 5.54957 15.844 5.61294 15.844 5.67626C15.7173 5.67626 15.5907 5.67626 15.464 5.67626C15.464 5.73957 15.464 5.80294 15.464 5.86626C15.274 5.86626 15.084 5.86626 14.894 5.86626C14.894 5.92957 14.894 5.99294 14.894 6.05626C14.704 6.05626 14.514 6.05626 14.324 6.05626C14.324 6.11957 14.324 6.18294 14.324 6.24626C14.134 6.24626 13.944 6.24626 13.754 6.24626C13.754 6.29376 13.754 6.34126 13.754 6.38876C13.3748 6.42039 12.9948 6.43621 12.614 6.43626C12.614 6.48376 12.614 6.53126 12.614 6.57876C11.9179 6.61438 11.2213 6.6302 10.524 6.62626C10.524 6.67376 10.524 6.72126 10.524 6.76876C10.3973 6.76876 10.2707 6.76876 10.144 6.76876C10.144 6.72126 10.144 6.67376 10.144 6.62626C9.44675 6.6302 8.75007 6.61438 8.054 6.57876C8.054 6.53126 8.054 6.48376 8.054 6.43626C7.6732 6.43621 7.2932 6.42039 6.914 6.38876C6.914 6.34126 6.914 6.29376 6.914 6.24626C6.72239 6.24602 6.53239 6.2302 6.344 6.19876C6.344 6.15126 6.344 6.10376 6.344 6.05626C6.154 6.05626 5.964 6.05626 5.774 6.05626C5.774 5.99294 5.774 5.92957 5.774 5.86626C5.584 5.86626 5.394 5.86626 5.204 5.86626C5.204 5.80294 5.204 5.73957 5.204 5.67626C5.07734 5.67626 4.95067 5.67626 4.824 5.67626C4.824 5.61294 4.824 5.54957 4.824 5.48626C4.69734 5.48626 4.57067 5.48626 4.444 5.48626C4.444 5.42294 4.444 5.35957 4.444 5.29626C4.38067 5.29626 4.31734 5.29626 4.254 5.29626C4.254 5.23294 4.254 5.16957 4.254 5.10626C4.19067 5.10626 4.12734 5.10626 4.064 5.10626C4.064 5.04294 4.064 4.97957 4.064 4.91626C3.93734 4.91626 3.81067 4.91626 3.684 4.91626C3.684 4.78957 3.684 4.66293 3.684 4.53626C3.62067 4.53626 3.55734 4.53626 3.494 4.53626C3.494 4.47293 3.494 4.40959 3.494 4.34626C3.43067 4.34626 3.36734 4.34626 3.304 4.34626C3.304 3.96626 3.304 3.58626 3.304 3.20626C3.36734 3.20626 3.43067 3.20626 3.494 3.20626C3.494 3.14293 3.494 3.07959 3.494 3.01626C3.55734 3.01626 3.62067 3.01626 3.684 3.01626C3.684 2.88959 3.684 2.76293 3.684 2.63626C3.81067 2.63626 3.93734 2.63626 4.064 2.63626C4.064 2.57293 4.064 2.50959 4.064 2.44626C4.12734 2.44626 4.19067 2.44626 4.254 2.44626C4.254 2.38293 4.254 2.31959 4.254 2.25626C4.31734 2.25626 4.38067 2.25626 4.444 2.25626C4.444 2.19293 4.444 2.12959 4.444 2.06626C4.57067 2.06626 4.69734 2.06626 4.824 2.06626C4.824 2.00293 4.824 1.93959 4.824 1.87626C4.95067 1.87626 5.07734 1.87626 5.204 1.87626C5.204 1.81293 5.204 1.74959 5.204 1.68626C5.394 1.68626 5.584 1.68626 5.774 1.68626C5.774 1.62293 5.774 1.55959 5.774 1.49626C5.964 1.49626 6.154 1.49626 6.344 1.49626C6.344 1.43293 6.344 1.36959 6.344 1.30626C6.534 1.30626 6.724 1.30626 6.914 1.30626C6.914 1.24293 6.914 1.17959 6.914 1.11626C7.23069 1.11626 7.54732 1.11626 7.864 1.11626C7.864 1.05293 7.864 0.989589 7.864 0.926257C8.624 0.926257 9.384 0.926257 10.144 0.926257C10.144 0.862926 10.144 0.799589 10.144 0.736257ZM3.494 6.05626C3.62067 6.05626 3.74734 6.05626 3.874 6.05626C3.874 6.11957 3.874 6.18294 3.874 6.24626C3.93734 6.24626 4.00067 6.24626 4.064 6.24626C4.064 6.30957 4.064 6.37294 4.064 6.43626C4.19067 6.43626 4.31734 6.43626 4.444 6.43626C4.444 6.49957 4.444 6.56294 4.444 6.62626C4.634 6.62626 4.824 6.62626 5.014 6.62626C5.014 6.68957 5.014 6.75294 5.014 6.81626C5.14067 6.81626 5.26734 6.81626 5.394 6.81626C5.394 6.87957 5.394 6.94294 5.394 7.00626C5.584 7.00626 5.774 7.00626 5.964 7.00626C5.964 7.06957 5.964 7.13294 5.964 7.19626C6.21732 7.19626 6.47069 7.19626 6.724 7.19626C6.724 7.25957 6.724 7.32294 6.724 7.38626C7.04069 7.38626 7.35732 7.38626 7.674 7.38626C7.674 7.44957 7.674 7.51294 7.674 7.57626C9.384 7.57626 11.094 7.57626 12.804 7.57626C12.804 7.51294 12.804 7.44957 12.804 7.38626C13.184 7.38626 13.564 7.38626 13.944 7.38626C13.944 7.32294 13.944 7.25957 13.944 7.19626C14.1973 7.19626 14.4507 7.19626 14.704 7.19626C14.704 7.13294 14.704 7.06957 14.704 7.00626C14.894 7.00626 15.084 7.00626 15.274 7.00626C15.274 6.94294 15.274 6.87957 15.274 6.81626C15.4007 6.81626 15.5273 6.81626 15.654 6.81626C15.654 6.75294 15.654 6.68957 15.654 6.62626C15.844 6.62626 16.034 6.62626 16.224 6.62626C16.224 6.56294 16.224 6.49957 16.224 6.43626C16.3507 6.43626 16.4773 6.43626 16.604 6.43626C16.604 6.37294 16.604 6.30957 16.604 6.24626C16.6673 6.24626 16.7307 6.24626 16.794 6.24626C16.794 6.18294 16.794 6.11957 16.794 6.05626C16.9048 6.05626 17.0157 6.05626 17.1265 6.05626C17.113 7.00754 17.1288 7.95754 17.174 8.90626C17.2215 8.90626 17.269 8.90626 17.3165 8.90626C17.3798 9.28626 17.3798 9.66626 17.3165 10.0463C17.269 10.0463 17.2215 10.0463 17.174 10.0463C17.1582 10.1729 17.1423 10.2996 17.1265 10.4263C17.079 10.4263 17.0315 10.4263 16.984 10.4263C16.9998 10.5688 16.9365 10.6321 16.794 10.6163C16.794 10.6638 16.794 10.7113 16.794 10.7588C16.6673 10.7746 16.5407 10.7904 16.414 10.8063C16.414 10.8696 16.414 10.9329 16.414 10.9963C16.3507 10.9963 16.2873 10.9963 16.224 10.9963C16.224 11.0438 16.224 11.0913 16.224 11.1388C16.0973 11.1546 15.9707 11.1704 15.844 11.1863C15.844 11.2338 15.844 11.2813 15.844 11.3288C15.7173 11.3446 15.5907 11.3604 15.464 11.3763C15.464 11.4238 15.464 11.4713 15.464 11.5188C15.2756 11.5502 15.0856 11.566 14.894 11.5663C14.894 11.6138 14.894 11.6613 14.894 11.7088C14.7056 11.7402 14.5156 11.756 14.324 11.7563C14.324 11.8038 14.324 11.8513 14.324 11.8988C14.1356 11.9302 13.9456 11.946 13.754 11.9463C13.754 12.0096 13.754 12.0729 13.754 12.1363C13.6907 12.1363 13.6273 12.1363 13.564 12.1363C13.5007 12.3263 13.5007 12.5163 13.564 12.7063C13.6273 12.7063 13.6907 12.7063 13.754 12.7063C13.754 12.7696 13.754 12.8329 13.754 12.8963C14.0073 12.8963 14.2607 12.8963 14.514 12.8963C14.514 12.8329 14.514 12.7696 14.514 12.7063C14.7673 12.7063 15.0207 12.7063 15.274 12.7063C15.274 12.6429 15.274 12.5796 15.274 12.5163C15.4007 12.5163 15.5273 12.5163 15.654 12.5163C15.654 12.4529 15.654 12.3896 15.654 12.3263C15.844 12.3263 16.034 12.3263 16.224 12.3263C16.224 12.2629 16.224 12.1996 16.224 12.1363C16.3507 12.1363 16.4773 12.1363 16.604 12.1363C16.604 12.0729 16.604 12.0096 16.604 11.9463C16.6673 11.9463 16.7307 11.9463 16.794 11.9463C16.794 11.8829 16.794 11.8196 16.794 11.7563C16.9048 11.7563 17.0157 11.7563 17.1265 11.7563C17.113 12.7075 17.1288 13.6575 17.174 14.6063C17.2215 14.6063 17.269 14.6063 17.3165 14.6063C17.3798 14.9863 17.3798 15.3663 17.3165 15.7463C17.269 15.7463 17.2215 15.7463 17.174 15.7463C17.174 15.8096 17.174 15.8729 17.174 15.9363C17.1107 15.9363 17.0473 15.9363 16.984 15.9363C16.9917 16.0482 16.9839 16.159 16.9603 16.2688C16.9122 16.3085 16.8568 16.3243 16.794 16.3163C16.794 16.3638 16.794 16.4113 16.794 16.4588C16.6673 16.4746 16.5407 16.4904 16.414 16.5063C16.414 16.5696 16.414 16.6329 16.414 16.6963C16.3507 16.6963 16.2873 16.6963 16.224 16.6963C16.224 16.7438 16.224 16.7913 16.224 16.8388C16.0973 16.8546 15.9707 16.8704 15.844 16.8863C15.844 16.9338 15.844 16.9813 15.844 17.0288C15.7173 17.0446 15.5907 17.0604 15.464 17.0763C15.464 17.1238 15.464 17.1713 15.464 17.2188C15.2756 17.2502 15.0856 17.266 14.894 17.2663C14.894 17.3138 14.894 17.3613 14.894 17.4088C14.7056 17.4402 14.5156 17.456 14.324 17.4563C14.324 17.5038 14.324 17.5513 14.324 17.5988C14.1356 17.6302 13.9456 17.646 13.754 17.6463C13.754 17.6938 13.754 17.7413 13.754 17.7888C13.438 17.8151 13.1213 17.8309 12.804 17.8363C12.804 17.8838 12.804 17.9313 12.804 17.9788C12.0444 18.0104 11.2844 18.0263 10.524 18.0263C10.524 18.0738 10.524 18.1213 10.524 18.1688C10.3973 18.1688 10.2707 18.1688 10.144 18.1688C10.144 18.1213 10.144 18.0738 10.144 18.0263C9.38358 18.0263 8.62358 18.0104 7.864 17.9788C7.864 17.9313 7.864 17.8838 7.864 17.8363C7.5467 17.8309 7.23002 17.8151 6.914 17.7888C6.914 17.7413 6.914 17.6938 6.914 17.6463C6.72239 17.646 6.53239 17.6302 6.344 17.5988C6.344 17.5513 6.344 17.5038 6.344 17.4563C6.15239 17.456 5.96239 17.4402 5.774 17.4088C5.774 17.3613 5.774 17.3138 5.774 17.2663C5.58238 17.266 5.39238 17.2502 5.204 17.2188C5.204 17.1713 5.204 17.1238 5.204 17.0763C5.07734 17.0604 4.95067 17.0446 4.824 17.0288C4.824 16.9813 4.824 16.9338 4.824 16.8863C4.69734 16.8704 4.57067 16.8546 4.444 16.8388C4.444 16.7913 4.444 16.7438 4.444 16.6963C4.38067 16.6963 4.31734 16.6963 4.254 16.6963C4.254 16.6329 4.254 16.5696 4.254 16.5063C4.12734 16.4904 4.00067 16.4746 3.874 16.4588C3.874 16.4113 3.874 16.3638 3.874 16.3163C3.81067 16.3163 3.74734 16.3163 3.684 16.3163C3.684 16.1896 3.684 16.0629 3.684 15.9363C3.62067 15.9363 3.55734 15.9363 3.494 15.9363C3.494 15.8729 3.494 15.8096 3.494 15.7463C3.43067 15.7463 3.36734 15.7463 3.304 15.7463C3.304 15.3663 3.304 14.9863 3.304 14.6063C3.36734 14.6063 3.43067 14.6063 3.494 14.6063C3.494 13.6563 3.494 12.7063 3.494 11.7563C3.62067 11.7563 3.74734 11.7563 3.874 11.7563C3.874 11.8196 3.874 11.8829 3.874 11.9463C3.93734 11.9463 4.00067 11.9463 4.064 11.9463C4.064 12.0096 4.064 12.0729 4.064 12.1363C4.19067 12.1363 4.31734 12.1363 4.444 12.1363C4.444 12.1996 4.444 12.2629 4.444 12.3263C4.634 12.3263 4.824 12.3263 5.014 12.3263C5.014 12.3896 5.014 12.4529 5.014 12.5163C5.14067 12.5163 5.26734 12.5163 5.394 12.5163C5.394 12.5796 5.394 12.6429 5.394 12.7063C5.64732 12.7063 5.90069 12.7063 6.154 12.7063C6.154 12.7696 6.154 12.8329 6.154 12.8963C6.40732 12.8963 6.66069 12.8963 6.914 12.8963C6.914 12.8329 6.914 12.7696 6.914 12.7063C6.97732 12.7063 7.04069 12.7063 7.104 12.7063C7.104 12.5163 7.104 12.3263 7.104 12.1363C7.04069 12.1363 6.97732 12.1363 6.914 12.1363C6.914 12.0729 6.914 12.0096 6.914 11.9463C6.72239 11.946 6.53239 11.9302 6.344 11.8988C6.344 11.8513 6.344 11.8038 6.344 11.7563C6.15239 11.756 5.96239 11.7402 5.774 11.7088C5.774 11.6613 5.774 11.6138 5.774 11.5663C5.58238 11.566 5.39238 11.5502 5.204 11.5188C5.204 11.4713 5.204 11.4238 5.204 11.3763C5.07734 11.3604 4.95067 11.3446 4.824 11.3288C4.824 11.2813 4.824 11.2338 4.824 11.1863C4.69734 11.1704 4.57067 11.1546 4.444 11.1388C4.444 11.0913 4.444 11.0438 4.444 10.9963C4.38067 10.9963 4.31734 10.9963 4.254 10.9963C4.254 10.9329 4.254 10.8696 4.254 10.8063C4.19067 10.8063 4.12734 10.8063 4.064 10.8063C4.064 10.7429 4.064 10.6796 4.064 10.6163C3.93734 10.6163 3.81067 10.6163 3.684 10.6163C3.684 10.5529 3.684 10.4896 3.684 10.4263C3.62067 10.4263 3.55734 10.4263 3.494 10.4263C3.494 10.2996 3.494 10.1729 3.494 10.0463C3.43067 10.0463 3.36734 10.0463 3.304 10.0463C3.304 9.66626 3.304 9.28626 3.304 8.90626C3.36734 8.90626 3.43067 8.90626 3.494 8.90626C3.494 7.95626 3.494 7.00626 3.494 6.05626Z" fill="#727490" />
                                                                        <path opacity="0.812" fill-rule="evenodd" clip-rule="evenodd" d="M5.96441 3.01624C6.72441 3.01624 7.48441 3.01624 8.24441 3.01624C8.24441 3.07957 8.24441 3.1429 8.24441 3.20624C8.30773 3.20624 8.3711 3.20624 8.43441 3.20624C8.43441 3.45957 8.43441 3.7129 8.43441 3.96624C8.3711 3.96624 8.30773 3.96624 8.24441 3.96624C8.24441 4.02957 8.24441 4.0929 8.24441 4.15624C7.48441 4.15624 6.72441 4.15624 5.96441 4.15624C5.96441 4.0929 5.96441 4.02957 5.96441 3.96624C5.9011 3.96624 5.83773 3.96624 5.77441 3.96624C5.77441 3.7129 5.77441 3.45957 5.77441 3.20624C5.83773 3.20624 5.9011 3.20624 5.96441 3.20624C5.96441 3.1429 5.96441 3.07957 5.96441 3.01624Z" fill="#727490" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_378_300">
                                                                            <rect width="19" height="19" fill="white" transform="translate(0.857422)" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </SvgIcon>

                                                        ) : (
                                                            <SvgIcon sx={{ ml: '5px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                                                                    <path opacity="0.962" fill-rule="evenodd" clip-rule="evenodd" d="M1.55507 0C7.19998 0 12.8449 0 18.4899 0C18.4899 0.0688389 18.4899 0.137683 18.4899 0.206522C18.5587 0.206522 18.6276 0.206522 18.6964 0.206522C18.6964 0.688404 18.6964 1.17029 18.6964 1.65217C18.8341 1.65217 18.9717 1.65217 19.1094 1.65217C19.1094 1.72101 19.1094 1.78986 19.1094 1.8587C19.1782 1.8587 19.2471 1.8587 19.3159 1.8587C19.3159 1.92753 19.3159 1.99638 19.3159 2.06522C19.3848 2.06522 19.4536 2.06522 19.5225 2.06522C19.5225 7.57248 19.5225 13.0797 19.5225 18.587C19.4536 18.587 19.3848 18.587 19.3159 18.587C19.3159 18.6558 19.3159 18.7247 19.3159 18.7935C19.2471 18.7935 19.1782 18.7935 19.1094 18.7935C19.1094 18.8623 19.1094 18.9312 19.1094 19C13.0515 19 6.99346 19 0.935504 19C0.935504 18.9312 0.935504 18.8623 0.935504 18.7935C0.866666 18.7935 0.797822 18.7935 0.728983 18.7935C0.728983 18.7247 0.728983 18.6558 0.728983 18.587C0.660144 18.587 0.5913 18.587 0.522461 18.587C0.522461 13.0797 0.522461 7.57248 0.522461 2.06522C0.5913 2.06522 0.660144 2.06522 0.728983 2.06522C0.728983 1.99638 0.728983 1.92753 0.728983 1.8587C0.797822 1.8587 0.866666 1.8587 0.935504 1.8587C0.935504 1.78986 0.935504 1.72101 0.935504 1.65217C1.07319 1.65217 1.21087 1.65217 1.34855 1.65217C1.34855 1.17029 1.34855 0.688404 1.34855 0.206522C1.41739 0.206522 1.48623 0.206522 1.55507 0.206522C1.55507 0.137683 1.55507 0.0688389 1.55507 0ZM2.17463 0.826087C2.58768 0.826087 3.00072 0.826087 3.41377 0.826087C3.41377 1.10145 3.41377 1.37681 3.41377 1.65217C3.00072 1.65217 2.58768 1.65217 2.17463 1.65217C2.17463 1.37681 2.17463 1.10145 2.17463 0.826087ZM4.23985 0.826087C4.92824 0.826087 5.61668 0.826087 6.30507 0.826087C6.30507 1.10145 6.30507 1.37681 6.30507 1.65217C5.61668 1.65217 4.92824 1.65217 4.23985 1.65217C4.23985 1.37681 4.23985 1.10145 4.23985 0.826087ZM7.13116 0.826087C7.94005 0.826087 8.74889 0.826087 9.55779 0.826087C9.55779 1.10145 9.55779 1.37681 9.55779 1.65217C8.74889 1.65217 7.94005 1.65217 7.13116 1.65217C7.13116 1.37681 7.13116 1.10145 7.13116 0.826087ZM10.4355 0.826087C11.2616 0.826087 12.0877 0.826087 12.9138 0.826087C12.9138 1.10145 12.9138 1.37681 12.9138 1.65217C12.0877 1.65217 11.2616 1.65217 10.4355 1.65217C10.4355 1.37681 10.4355 1.10145 10.4355 0.826087ZM13.7399 0.826087C14.411 0.826087 15.0822 0.826087 15.7534 0.826087C15.7534 1.10145 15.7534 1.37681 15.7534 1.65217C15.0822 1.65217 14.411 1.65217 13.7399 1.65217C13.7399 1.37681 13.7399 1.10145 13.7399 0.826087ZM16.6312 0.826087C17.027 0.826087 17.4228 0.826087 17.8187 0.826087C17.8187 1.10145 17.8187 1.37681 17.8187 1.65217C17.4228 1.65217 17.027 1.65217 16.6312 1.65217C16.6312 1.37681 16.6312 1.10145 16.6312 0.826087ZM1.76159 2.47826C5.47898 2.47826 9.19637 2.47826 12.9138 2.47826C12.9138 7.69293 12.9138 12.9076 12.9138 18.1223C9.19637 18.1223 5.47898 18.1223 1.76159 18.1223C1.76159 18.0707 1.76159 18.019 1.76159 17.9674C1.69275 17.9674 1.62391 17.9674 1.55507 17.9674C1.55507 17.8986 1.55507 17.8297 1.55507 17.7609C1.48623 17.7609 1.41739 17.7609 1.34855 17.7609C1.34855 12.8043 1.34855 7.84783 1.34855 2.8913C1.41739 2.8913 1.48623 2.8913 1.55507 2.8913C1.55507 2.82247 1.55507 2.75362 1.55507 2.68478C1.62391 2.68478 1.69275 2.68478 1.76159 2.68478C1.76159 2.61594 1.76159 2.5471 1.76159 2.47826ZM13.7399 2.47826C14.411 2.47826 15.0822 2.47826 15.7534 2.47826C15.7534 2.75362 15.7534 3.02899 15.7534 3.30435C15.2027 3.30435 14.652 3.30435 14.1013 3.30435C14.1013 3.57971 14.1013 3.85507 14.1013 4.13043C14.652 4.13043 15.2027 4.13043 15.7534 4.13043C15.7534 4.40578 15.7534 4.68118 15.7534 4.95652C15.2027 4.95652 14.652 4.95652 14.1013 4.95652C14.1013 5.23187 14.1013 5.50726 14.1013 5.78261C14.652 5.78261 15.2027 5.78261 15.7534 5.78261C15.7534 6.04076 15.7534 6.29891 15.7534 6.55707C15.2196 6.54849 14.6861 6.55707 14.1529 6.58288C14.1027 6.86205 14.0854 7.14601 14.1013 7.43478C14.652 7.43478 15.2027 7.43478 15.7534 7.43478C15.7534 7.69293 15.7534 7.95109 15.7534 8.20924C15.2196 8.20067 14.6861 8.20924 14.1529 8.23505C14.1027 8.51422 14.0854 8.79819 14.1013 9.08696C14.652 9.08696 15.2027 9.08696 15.7534 9.08696C15.7534 9.34511 15.7534 9.60326 15.7534 9.86141C15.2196 9.85284 14.6861 9.86141 14.1529 9.88723C14.1027 10.1664 14.0854 10.4504 14.1013 10.7391C14.652 10.7391 15.2027 10.7391 15.7534 10.7391C15.7534 10.9973 15.7534 11.2554 15.7534 11.5136C15.2196 11.505 14.6861 11.5136 14.1529 11.5394C14.1027 11.8186 14.0854 12.1025 14.1013 12.3913C14.652 12.3913 15.2027 12.3913 15.7534 12.3913C15.7534 12.6495 15.7534 12.9076 15.7534 13.1658C15.2196 13.1572 14.6861 13.1658 14.1529 13.1916C14.1027 13.4707 14.0854 13.7547 14.1013 14.0435C14.652 14.0435 15.2027 14.0435 15.7534 14.0435C15.7534 14.3016 15.7534 14.5598 15.7534 14.8179C15.2196 14.8094 14.6861 14.8179 14.1529 14.8438C14.1027 15.1229 14.0854 15.4069 14.1013 15.6957C14.652 15.6957 15.2027 15.6957 15.7534 15.6957C15.7534 15.9538 15.7534 16.212 15.7534 16.4701C15.2196 16.4615 14.6861 16.4701 14.1529 16.4959C14.1027 16.7751 14.0854 17.0591 14.1013 17.3478C14.652 17.3478 15.2027 17.3478 15.7534 17.3478C15.7534 17.606 15.7534 17.8641 15.7534 18.1223C15.0822 18.1223 14.411 18.1223 13.7399 18.1223C13.7399 12.9076 13.7399 7.69293 13.7399 2.47826ZM16.6312 2.47826C17.1819 2.47826 17.7326 2.47826 18.2833 2.47826C18.2833 2.5471 18.2833 2.61594 18.2833 2.68478C18.3522 2.68478 18.421 2.68478 18.4899 2.68478C18.4899 2.75362 18.4899 2.82247 18.4899 2.8913C18.5415 2.8913 18.5931 2.8913 18.6447 2.8913C18.6447 7.84783 18.6447 12.8043 18.6447 17.7609C18.5931 17.7609 18.5415 17.7609 18.4899 17.7609C18.4899 17.8297 18.4899 17.8986 18.4899 17.9674C18.421 17.9674 18.3522 17.9674 18.2833 17.9674C18.2833 18.019 18.2833 18.0707 18.2833 18.1223C17.7326 18.1223 17.1819 18.1223 16.6312 18.1223C16.6312 12.9076 16.6312 7.69293 16.6312 2.47826Z" fill="#727490" />
                                                                </svg>
                                                            </SvgIcon>
                                                        )
                                                        }


                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <FixedPopup />
                </Grid>
            </Grid >
        </>
    );
};

export default FullBorderedGrid;
