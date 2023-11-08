import CategoryItem from "@/Components/CategoryItems/CategoryItem";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Header from "@/Components/Header";
const { Grid, Typography, Button } = require("@mui/material")

const Category = () => {
    const Item = [
        {
            title: 'شیرین کننده ها',
            link: '',
            texts: [
                { text: 'دکستروز خشک' },
                { text: 'مالتو دکسترین' },
            ]
        },
        {
            title: 'امولسیفایر ها',
            link: '',
            texts: [
                { text: 'مونو دی گلیسیرید' },
                { text: 'لسیتین' },
                { text: 'گلیسیرین' },
            ]
        },
        {
            title: 'نگهدارنده ها',
            link: '',
            texts: [
                { text: 'پروپیلن گلایکول (MPG)' },
                { text: 'سوربات پتاسیم' },
                { text: 'گوارگام' },
            ]
        },
        {
            title: 'اسید ها',
            link: '',
            texts: [
                { text: 'اسید فسفریک ۸۵ درصد' },
                { text: 'اسید لاکتیک' },
                { text: 'آسکوربیک اسید (ویتامین C)' },
            ]
        },
        {
            title: 'طعم دهنده ها',
            link: '',
            texts: [
                { text: 'گلوتامات' },
                { text: 'سیترات سدیم' },
            ]
        },
        {
            title: 'پایدار کننده ها',
            link: '',
            texts: [
                { text: 'سدیم کربوکسی متیل سلولز (CMC)' },
                { text: 'زانتان گام' },
            ]
        },
        {
            title: 'فسفاته ها',
            link: '',
            texts: [
                { text: 'تترا سدیم پیروفسفات' },
            ]
        },
        {
            title: 'نمک ها',
            link: '',
            texts: [
                { text: 'بی کربنات سدیم (جوش شیرین)' },
            ]
        },
        {
            title: 'گرید صنعتی',
            link: '',
            texts: [
                { text: 'پتاسیم هیدروکسید (KOH)' },
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
            <Link href={item.link}>
                <CategoryItem titleText={item.title} textsArray={item.texts.map(textItem => textItem.text)} />
            </Link>
        </Grid>
    ));
    return (
        <>
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