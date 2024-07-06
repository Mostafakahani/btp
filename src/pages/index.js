import React, { useEffect, useState } from "react";
import Header from "@/Components/Header";
import SliderComponent from "@/Components/SliderComponent/SliderComponent";
import { Grid, Typography } from "@mui/material";
import Contact from "./Contact/Contact";
import SliderComponentText from "@/Components/SliderComponentText/SliderComponentText";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";

import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function HomePage() {
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);
  let years = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

  years = '"' + years + '"';
  return (
    <>
      <Head>
        <title>بازرگانی بارمان تجارت پایدار</title>
        <meta
          name="description"
          content={`وب سایت بازرگانی بارمان تجارت پایدار`}
        />
        <meta charSet="UTF-8" />
        <meta name="subject" content={`صفحه اصلی بارمان تجارت پایدار `} />
        <meta name="copyright" content="بازرگانی بارمان تجارت پایدار (BTP)" />
        <meta name="robots" content="index,follow" />
        <meta name="language" content="FA" />
        <meta name="url" content={`https://btp.one`} />
        <meta name="category" content={"main"} />
        <meta name="date" content={years} />
        <meta name="MobileOptimized" content="320" />
      </Head>
      <Header />
      <Grid
        container
        sx={{
          backgroundImage: `url('/bg2.png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          position: "relative", // اضافه کردن مکان نسبی
        }}
      >
        <Grid
          item
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            mt: "25px",
            mb: { xs: 4, sm: 1 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "800",
              color: "#1F2241",
              transition: "1s",
              fontSize: { xs: "1.5rem", sm: "4rem", md: "5rem" },
              textAlign: "center",
            }}
          >
            بازرگانی بارمان تجارت پایدار
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "400",
              color: "#1F2241",
              mt: "30px",
              transition: "1s",
              fontSize: {
                xs: "1.2rem",
                sm: "23px",
                md: "30px",
                textAlign: "center",
              },
            }}
          >
            وارد کننده مواد اولیه صنایع غذایی، شیمیایی، آرایشی، بهداشتی و دارویی
          </Typography>
        </Grid>

        <SliderComponent />
        <Grid
          item
          container
          //  sx={{ mt: "15px" }}
          spacing={2}
          id="About"
        >
          <SliderComponentText />
        </Grid>
        <Grid
          item
          container
          //  sx={{ mt: "15px" }}
          // spacing={2}
          id="Contact"
        >
          <Contact />
        </Grid>

        {/* <button
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
        </button> */}
      </Grid>
    </>
  );
}
