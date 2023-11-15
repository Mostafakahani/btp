import CategoryItem from "@/Components/CategoryItems/CategoryItem";
import Link from "next/link";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Header from "@/Components/Header";
import ContactItems from "@/Components/ContanctItems/ContactItems";
import CompanyContact from "@/Components/ContanctItems/CompanyContact";
const { Grid, Typography, Button } = require("@mui/material")

const Contact = () => {
       const Item = [
        {
            img: '/prof.jpg',
            titleName: 'علی اشرافی',
            subTitle: 'مدیر فروش بارمان تجارت پایدار',
            LinkedIn: 'ali-ashrafi',
            LinkedInLink: 'https://www.linkedin.com/in/ali-ashrafi/',
            email: 'ali.ashrafi@btp.one',
            emailLink: 'mailto:ali.ashrafi@btp.one',
            number: '+98 912 365 4022',
            numberLink: 'tell:+989123654022',
            whatsappLink: 'https://api.whatsapp.com/send?phone=989123654022&text=سلام%20آقای%20اشرافی،%20وقتتون%20بخیر.%20لطفا%20رزومه%20شرکت%20رو%20برای%20بنده%20ارسال%20کنید%20🙏🏻'
        },
        {
            img: '/prof.jpg',
            titleName: 'افروز اشرف زاده',
            subTitle: 'کارشناس ارشد فروش',
            LinkedIn: 'afrooz-ashrafzade',
            LinkedInLink: 'https://www.linkedin.com/in/afrooz-ashrafzade/',
            email: 'ali.ashrafi@btp.one',
            emailLink: '',
            number: '+98 919 545 0547',
            numberLink: 'tell:+989195450547',
            whatsappLink: ''
        },
        {
            img: '/prof.jpg',
            titleName: 'مجید مهدوی',
            subTitle: 'کارشناس فروش',
            LinkedIn: 'majid-mahdavi',
            LinkedInLink: 'https://www.linkedin.com/in/majid-mahdavi/',
            email: 'ali.ashrafi@btp.one',
            emailLink: '',
            number: '+98 919 516 6388',
            numberLink: 'tell:+989195166388',
            whatsappLink: ''
        },
    ]
    // const textsArray = Item.map((item) => {
    //     const titleText = item.title;
    //     return { titleText };
    // });

    return (
        <>
            <Grid container sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: { xs: '150px', sm: '100px' }, mb: '15px' }}>
                    <Typography variant="h3" sx={{ color: '#1F2241', fontWeight: 800, fontSize: { xs: '25px', sm: '28px', md: '38px' } }}>کارشناسان فروش  </Typography>
                </Grid>
                <Grid container maxWidth={'lg'} sx={{}} spacing={5}>
                    {
                        Item.map((item, index) => (
                            <ContactItems key={index} texts={item} />
                        ))
                    }
                </Grid>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: { xs: '150px', sm: '150px' }, mb: '50px' }}>
                    <Typography variant="h3" sx={{ color: '#1F2241', fontWeight: 800, fontSize: { xs: '25px', sm: '28px', md: '38px' } }}> اطلاعات تماس شرکت  </Typography>
                </Grid>
                <Grid container maxWidth={'lg'} sx={{ mb: '80px'}}>
                    <CompanyContact />
                </Grid>






            </Grid>

        </>
    )
}
export default Contact;