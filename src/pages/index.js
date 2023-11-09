import React from 'react';
import Header from '@/Components/Header';
import SliderComponent from '@/Components/SliderComponent/SliderComponent';
import { Grid, Typography } from '@mui/material';
import Contact from './Contact/Contact';
import SliderComponentText from '@/Components/SliderComponentText/SliderComponentText';



export default function HomePage() {

  return (
    <>
      <Grid container sx={{
        backgroundImage: `url('/bg2.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Header />
        <Grid container sx={{
          display: 'flex',
          justifyContent: "center",
          flexDirection: 'column',
          alignItems: 'center',
          my: '15px',
        }}>
          <Typography variant='h1' sx={{
            fontWeight: '800', color: '#1F2241', transition: '1s',
            '&:hover': {
              backgroundColor: '#262a57',
              color: '#fff',
            },


          }}>بازرگانی بارمان تجارت پایدار</Typography>

          <Typography variant='h3' sx={{ fontWeight: '400', color: '#1F2241', mt: '30px', transition: '1s' }}>وارد کننده مواد اولیه صنایع غذایی، شیمیایی، آرایشی، بهداشتی و دارویی</Typography>

        </Grid>
        <SliderComponent />
        <SliderComponentText />

        <Contact />
      </Grid >
    </>
  );
}
