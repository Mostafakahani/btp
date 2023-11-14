import React, { useEffect, useState } from 'react';
import Header from '@/Components/Header';
import SliderComponent from '@/Components/SliderComponent/SliderComponent';
import { Grid, Typography } from '@mui/material';
import Contact from './Contact/Contact';
import SliderComponentText from '@/Components/SliderComponentText/SliderComponentText';
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';

import { Link, Element, animateScroll as scroll } from 'react-scroll';


export default function HomePage() {

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800, // مدت زمان انیمیشن به میلی‌ثانیه
      smooth: 'easeInOutQuad', // تنظیم نوع انیمیشن
    });
  };





  return (
    <>
      <Head>
        <title>بازرگانی بارمان تجارت پایدار</title>
      </Head>
      <Grid container sx={{
        backgroundImage: `url('/bg2.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative', // اضافه کردن مکان نسبی

      }}>
        <Header />
        <Grid container sx={{
          display: 'flex',
          justifyContent: "center",
          flexDirection: 'column',
          alignItems: 'center',
          mt: '15px',
        }}>
          <Typography variant='h1' sx={{
            fontWeight: '800', color: '#1F2241', transition: '1s',
            fontSize: { xs: '2rem', sm: '4rem', md: '6rem' },
            textAlign: 'center',
          }}>بازرگانی بارمان تجارت پایدار</Typography>

          <Typography variant='h3' sx={{
            fontWeight: '400', color: '#1F2241', mt: '30px', transition: '1s',
            fontSize: { xs: '1rem', sm: '23px', md: '35px', textAlign: 'center' },
          }}>وارد کننده مواد اولیه صنایع غذایی، شیمیایی، آرایشی، بهداشتی و دارویی</Typography>

        </Grid>

        <SliderComponent />
        <SliderComponentText />






        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#262a57',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          بازگشت به بالا
        </button>

        <Contact />
      </Grid >
    </>
  );
}
