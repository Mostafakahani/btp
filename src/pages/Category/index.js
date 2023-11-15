import CategoryItem from "@/Components/CategoryItems/CategoryItem";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Header from "@/Components/Header";
import Head from "next/head";
const { Grid, Typography, Button } = require("@mui/material")

const Category = () => {
    const Item = [
        {
            title: 'شیرین کننده ها',
            link: '',
            texts: [
                {
                    text: 'دکستروز خشک',
                    link: ''
                },
                {
                    text: 'مالتو دکسترین',
                    link: ''
                },
            ]
        },
        {
            title: 'امولسیفایر ها',
            link: '',
            texts: [
                {
                    text: 'مونو دی گلیسیرید',
                    link: ''
                },
                {
                    text: 'لسیتین',
                    link: ''
                },
                {
                    text: 'گلیسیرین',
                    link: ''
                },
            ]
        },
        {
            title: 'نگهدارنده ها',
            link: '',
            texts: [
                {
                    text: 'پروپیلن گلایکول (MPG)',
                    link: ''
                },
                {
                    text: 'سوربات پتاسیم',
                    link: ''
                },
                {
                    text: 'گوارگام',
                    link: ''
                },
            ]
        },
        {
            title: 'اسید ها',
            link: '',
            texts: [
                {
                    text: 'اسید فسفریک ۸۵ درصد',
                    link: ''
                },
                {
                    text: 'اسید لاکتیک',
                    link: ''
                },
                {
                    text: 'آسکوربیک اسید (ویتامین C)',
                    link: ''
                },
            ]
        },
        {
            title: 'طعم دهنده ها',
            link: '',
            texts: [
                {
                    text: 'گلوتامات',
                    link: ''
                },
                {
                    text: 'سیترات سدیم',
                    link: ''
                },
            ]
        },
        {
            title: 'پایدار کننده ها',
            link: '',
            texts: [
                {
                    text: 'سدیم کربوکسی متیل سلولز (CMC)',
                    link: ''
                },
                {
                    text: 'زانتان گام',
                    link: ''
                },
            ]
        },
        {
            title: 'فسفاته ها',
            link: '',
            texts: [
                {
                    text: 'تترا سدیم پیروفسفات',
                    link: ''
                },
            ]
        },
        {
            title: 'نمک ها',
            link: '',
            texts: [
                {
                    text: 'بی کربنات سدیم (جوش شیرین)',
                    link: ''
                },
            ]
        },
        {
            title: 'گرید صنعتی',
            link: '',
            texts: [
                {
                    text: 'پتاسیم هیدروکسید (KOH)',
                    link: ''
                },
            ]
        },
    ]

    const textsArray = Item.map((item) => {
        const titleText = item.title;
        const textItems = item.texts.map((textItem) => textItem.text);
        return { titleText, textItems };
    });

    const categoryItems = Item.map((item, index) => (
        <Grid key={index} xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
            {/* <Link href={item.link}> */}
            <CategoryItem titleText={item.title} textsArray={item.texts.map(textItem => textItem.text)} linkArray={item.texts.map(textItem => textItem.link)} />
            {/* </Link> */}
        </Grid>
    ));
    return (
        <>
            <Head>
                <title>بازرگانی بارمان تجارت پایدار - دسته بندی</title>
            </Head>
            <Header />
            <Grid container sx={{
                backgroundImage: `url('/bg2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: '55px', }}>
                    <Typography variant="h2" sx={{ color: '#1F2241', fontWeight: 800, fontSize: { xs: '38px', sm: '45px', md: '50px' } }}>دسته‌بندی کالا ها</Typography>
                    <Link href={'/Products'} style={{ marginTop: '15px' }}>
                        <Button variant="text" sx={{ color: '#1F2241', borderRadius: '5px', fontSize: '20px', '&:hover': { backgroundColor: '#1f224108' } }} startIcon={<ArrowBackIosNewIcon />} disableElevation>مشاهده محصولات</Button>
                    </Link>
                </Grid>
                <Grid container maxWidth={'lg'} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {categoryItems}
                </Grid>
            </Grid>

        </>
    )
}
export default Category;