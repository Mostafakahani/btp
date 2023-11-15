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
                                            <MenuItem sx={{ direction: 'rtl' , display: "flex", flexDirection: 'column'}} key={index} value={x}>{x}</MenuItem>
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
                                                        {product.data[1].typeOfUse === 'گرید خوراکی' ? (
                                                            <SvgIcon sx={{ ml: '3px', fontSize: '18px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M6.11721 2.2088V17.7624M3.78418 2.59764V6.48603C3.78418 8.43023 6.11721 8.43023 6.11721 8.43023C6.11721 8.43023 8.45025 8.43023 8.45025 6.48603V2.59764M13.894 8.43023V17.7624M13.894 8.43023C15.1826 8.43023 16.227 7.03741 16.227 5.31951C16.227 3.60162 15.1826 2.2088 13.894 2.2088C12.6054 2.2088 11.561 3.60162 11.561 5.31951C11.561 7.03741 12.6054 8.43023 13.894 8.43023Z" stroke="#727491" stroke-width="1.0369" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </SvgIcon>
                                                        ) : (
                                                            <SvgIcon sx={{ ml: '3px', fontSize: '19px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M9.48349 12.9002C10.8187 12.9002 11.9011 11.8178 11.9011 10.4826C11.9011 9.14745 10.8187 8.06506 9.48349 8.06506C8.1483 8.06506 7.06592 9.14745 7.06592 10.4826C7.06592 11.8178 8.1483 12.9002 9.48349 12.9002Z" stroke="#727491" stroke-width="0.721702" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M1.4248 11.1918V9.7735C1.4248 8.93541 2.10978 8.24237 2.95593 8.24237C4.41453 8.24237 5.01087 7.21088 4.27754 5.94568C3.85849 5.22041 4.10831 4.27756 4.84164 3.85851L6.23577 3.06071C6.8724 2.68196 7.69437 2.9076 8.07312 3.54423L8.16177 3.69734C8.88704 4.96253 10.0797 4.96253 10.813 3.69734L10.9017 3.54423C11.2804 2.9076 12.1024 2.68196 12.739 3.06071L14.1332 3.85851C14.8665 4.27756 15.1163 5.22041 14.6973 5.94568C13.9639 7.21088 14.5603 8.24237 16.0189 8.24237C16.857 8.24237 17.55 8.92735 17.55 9.7735V11.1918C17.55 12.0299 16.865 12.7229 16.0189 12.7229C14.5603 12.7229 13.9639 13.7544 14.6973 15.0196C15.1163 15.753 14.8665 16.6878 14.1332 17.1068L12.739 17.9046C12.1024 18.2833 11.2804 18.0577 10.9017 17.4211L10.813 17.268C10.0878 16.0028 8.8951 16.0028 8.16177 17.268L8.07312 17.4211C7.69437 18.0577 6.8724 18.2833 6.23577 17.9046L4.84164 17.1068C4.10831 16.6878 3.85849 15.7449 4.27754 15.0196C5.01087 13.7544 4.41453 12.7229 2.95593 12.7229C2.10978 12.7229 1.4248 12.0299 1.4248 11.1918Z" stroke="#727491" stroke-width="0.721702" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </SvgIcon>
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
                                                                    <path d="M10 17.8125C9.95312 17.8125 9.89062 17.7969 9.84375 17.7813L2.34375 15.125C2.15625 15.0625 2.03125 14.875 2.03125 14.6875V5.31254C2.03125 5.10941 2.15625 4.93754 2.34375 4.87504L9.84375 2.21879C10.0938 2.12504 10.3594 2.26566 10.4375 2.50004C10.5313 2.75004 10.3906 3.01566 10.1562 3.09379L2.96875 5.64066V14.3594L10.1562 16.9063C10.4062 17 10.5313 17.2657 10.4375 17.5C10.375 17.6875 10.1875 17.8125 10 17.8125Z" fill="#727491" />
                                                                    <path d="M17.5 5.3125L10 2.65625L17.5 5.3125ZM17.5 5.3125L10 2.65625L17.5 5.3125Z" fill="white" />
                                                                    <path d="M17.9688 5.29684C17.9688 5.28122 17.9688 5.24997 17.9688 5.23434V5.21872C17.9375 5.06247 17.8281 4.92184 17.6719 4.87497L13.9219 3.54684H13.9062C13.8125 3.51559 13.6875 3.49997 13.5781 3.54684L6.25 6.12497C6.0625 6.18747 5.9375 6.37497 5.9375 6.56247V8.28122C5.9375 8.54684 6.14062 8.74997 6.40625 8.74997C6.67188 8.74997 6.875 8.54684 6.875 8.28122V6.89059L13.7188 4.46872L16.0938 5.31247L9.84375 7.53122C9.65625 7.59372 9.53125 7.76559 9.53125 7.96872C9.53125 7.96872 9.53125 7.96872 9.53125 7.98434V16.7031L2.96875 14.3593V5.64059L10.1562 3.09372C10.4062 2.99997 10.5313 2.73434 10.4375 2.49997C10.3438 2.24997 10.0781 2.12497 9.84375 2.21872L2.34375 4.87497C2.15625 4.93747 2.03125 5.12497 2.03125 5.31247V14.6875C2.03125 14.8906 2.15625 15.0625 2.34375 15.125L9.84375 17.7812C9.89062 17.7968 9.95312 17.8125 10 17.8125C10.0469 17.8125 10.1094 17.7968 10.1562 17.7812L17.6562 15.125C17.8438 15.0625 17.9688 14.875 17.9688 14.6875V5.29684ZM17.0312 14.3593L10.4688 16.6875V8.29684L17.0312 5.96872V14.3593Z" fill="#727491" />
                                                                </svg>
                                                            </SvgIcon>
                                                        ) : (
                                                            <SvgIcon sx={{ ml: '2px' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M10 17.8125C9.95312 17.8125 9.89062 17.7969 9.84375 17.7813L2.34375 15.125C2.15625 15.0625 2.03125 14.875 2.03125 14.6875V5.31254C2.03125 5.10941 2.15625 4.93754 2.34375 4.87504L9.84375 2.21879C10.0938 2.12504 10.3594 2.26566 10.4375 2.50004C10.5313 2.75004 10.3906 3.01566 10.1562 3.09379L2.96875 5.64066V14.3594L10.1562 16.9063C10.4062 17 10.5313 17.2657 10.4375 17.5C10.375 17.6875 10.1875 17.8125 10 17.8125Z" fill="#727491" />
                                                                    <path d="M17.5 5.3125L10 2.65625L17.5 5.3125ZM17.5 5.3125L10 2.65625L17.5 5.3125Z" fill="white" />
                                                                    <path d="M17.9688 5.29684C17.9688 5.28122 17.9688 5.24997 17.9688 5.23434V5.21872C17.9375 5.06247 17.8281 4.92184 17.6719 4.87497L13.9219 3.54684H13.9062C13.8125 3.51559 13.6875 3.49997 13.5781 3.54684L6.25 6.12497C6.0625 6.18747 5.9375 6.37497 5.9375 6.56247V8.28122C5.9375 8.54684 6.14062 8.74997 6.40625 8.74997C6.67188 8.74997 6.875 8.54684 6.875 8.28122V6.89059L13.7188 4.46872L16.0938 5.31247L9.84375 7.53122C9.65625 7.59372 9.53125 7.76559 9.53125 7.96872C9.53125 7.96872 9.53125 7.96872 9.53125 7.98434V16.7031L2.96875 14.3593V5.64059L10.1562 3.09372C10.4062 2.99997 10.5313 2.73434 10.4375 2.49997C10.3438 2.24997 10.0781 2.12497 9.84375 2.21872L2.34375 4.87497C2.15625 4.93747 2.03125 5.12497 2.03125 5.31247V14.6875C2.03125 14.8906 2.15625 15.0625 2.34375 15.125L9.84375 17.7812C9.89062 17.7968 9.95312 17.8125 10 17.8125C10.0469 17.8125 10.1094 17.7968 10.1562 17.7812L17.6562 15.125C17.8438 15.0625 17.9688 14.875 17.9688 14.6875V5.29684ZM17.0312 14.3593L10.4688 16.6875V8.29684L17.0312 5.96872V14.3593Z" fill="#727491" />
                                                                </svg>
                                                            </SvgIcon>
                                                        )}


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
