import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Grid, SvgIcon, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import Link from "next/link";

const SliderComponentText = () => {
  const props = {
    speed: 500,
    autoplaySpeed: 400000,
    data: [
      {
        id: 1,
        title: "بازرگانی بارمان تجارت پایدار را بیشتر بشناسید...",
        text: "بارمان تجارت پایدار، شرکتی با سابقه‌ای درخشان در تامین مواد اولیه صنایع غذایی، دارویی، کشاورزی، آرایشی، بهداشتی و شیمیایی است. مدیریت این شرکت با تجربه چندین ساله در این زمینه، با همت و تلاش بی وقفه، به سرعت به موفقیت رسیده است. شرکت بارمان تجارت پایدار برای اطمینان از کیفیت بالای مواد اولیه، تیم‌هایی را برای بررسی کیفیت هر محصول قبل از خرید، پس از خرید و قبل از ارسال به ایران به نمایندگان کشورهای مختلف اعزام می‌کند. این شرکت با تلاش‌های بی وقفه و با تکیه بر تیم‌های کارشناسی، مواد اولیه با کیفیت بالا را از کشورهای چین، مالزی، کره و هند وارد می‌کند. این شرکت با داشتن بخش‌های مختلفی مانند بخش آزمایشگاه، بخش مدیریتی، بخش بازرگانی و بخش فروش، همیشه در حال فعالیت و پیگیری تلاش برای ارائه بالاترین کیفیت است. بارمان تجارت پایدار با تمرکز بر کیفیت، بهترین مواد اولیه را به تولیدکنندگان ارائه می‌دهد و به همین دلیل، این شرکت به یکی از معتبرترین شرکت‌های تامین کننده تبدیل شده است.",
        background: "/SliderCompany/01.jfif",
      },

      {
        id: 2,
        title: "بازرگانی بارمان تجارت پایدار را بیشتر بشناسید...",
        text: "بارمان تجارت پایدار، شرکتی با سابقه‌ای درخشان در تامین مواد اولیه صنایع غذایی، دارویی، کشاورزی، آرایشی، بهداشتی و شیمیایی است. مدیریت این شرکت با تجربه چندین ساله در این زمینه، با همت و تلاش بی وقفه، به سرعت به موفقیت رسیده است. شرکت بارمان تجارت پایدار برای اطمینان از کیفیت بالای مواد اولیه، تیم‌هایی را برای بررسی کیفیت هر محصول قبل از خرید، پس از خرید و قبل از ارسال به ایران به نمایندگان کشورهای مختلف اعزام می‌کند. این شرکت با تلاش‌های بی وقفه و با تکیه بر تیم‌های کارشناسی، مواد اولیه با کیفیت بالا را از کشورهای چین، مالزی، کره و هند وارد می‌کند. این شرکت با داشتن بخش‌های مختلفی مانند بخش آزمایشگاه، بخش مدیریتی، بخش بازرگانی و بخش فروش، همیشه در حال فعالیت و پیگیری تلاش برای ارائه بالاترین کیفیت است. بارمان تجارت پایدار با تمرکز بر کیفیت، بهترین مواد اولیه را به تولیدکنندگان ارائه می‌دهد و به همین دلیل، این شرکت به یکی از معتبرترین شرکت‌های تامین کننده تبدیل شده است.",
        background: "/SliderCompany/02.jfif",
      },

      {
        id: 3,
        title: "بازرگانی بارمان تجارت پایدار را بیشتر بشناسید...",
        text: "بارمان تجارت پایدار، شرکتی با سابقه‌ای درخشان در تامین مواد اولیه صنایع غذایی، دارویی، کشاورزی، آرایشی، بهداشتی و شیمیایی است. مدیریت این شرکت با تجربه چندین ساله در این زمینه، با همت و تلاش بی وقفه، به سرعت به موفقیت رسیده است. شرکت بارمان تجارت پایدار برای اطمینان از کیفیت بالای مواد اولیه، تیم‌هایی را برای بررسی کیفیت هر محصول قبل از خرید، پس از خرید و قبل از ارسال به ایران به نمایندگان کشورهای مختلف اعزام می‌کند. این شرکت با تلاش‌های بی وقفه و با تکیه بر تیم‌های کارشناسی، مواد اولیه با کیفیت بالا را از کشورهای چین، مالزی، کره و هند وارد می‌کند. این شرکت با داشتن بخش‌های مختلفی مانند بخش آزمایشگاه، بخش مدیریتی، بخش بازرگانی و بخش فروش، همیشه در حال فعالیت و پیگیری تلاش برای ارائه بالاترین کیفیت است. بارمان تجارت پایدار با تمرکز بر کیفیت، بهترین مواد اولیه را به تولیدکنندگان ارائه می‌دهد و به همین دلیل، این شرکت به یکی از معتبرترین شرکت‌های تامین کننده تبدیل شده است.",
        background: "/SliderCompany/03.jfif",
      },

      {
        id: 4,
        title: "بازرگانی بارمان تجارت پایدار را بیشتر بشناسید...",
        text: "بارمان تجارت پایدار، شرکتی با سابقه‌ای درخشان در تامین مواد اولیه صنایع غذایی، دارویی، کشاورزی، آرایشی، بهداشتی و شیمیایی است. مدیریت این شرکت با تجربه چندین ساله در این زمینه، با همت و تلاش بی وقفه، به سرعت به موفقیت رسیده است. شرکت بارمان تجارت پایدار برای اطمینان از کیفیت بالای مواد اولیه، تیم‌هایی را برای بررسی کیفیت هر محصول قبل از خرید، پس از خرید و قبل از ارسال به ایران به نمایندگان کشورهای مختلف اعزام می‌کند. این شرکت با تلاش‌های بی وقفه و با تکیه بر تیم‌های کارشناسی، مواد اولیه با کیفیت بالا را از کشورهای چین، مالزی، کره و هند وارد می‌کند. این شرکت با داشتن بخش‌های مختلفی مانند بخش آزمایشگاه، بخش مدیریتی، بخش بازرگانی و بخش فروش، همیشه در حال فعالیت و پیگیری تلاش برای ارائه بالاترین کیفیت است. بارمان تجارت پایدار با تمرکز بر کیفیت، بهترین مواد اولیه را به تولیدکنندگان ارائه می‌دهد و به همین دلیل، این شرکت به یکی از معتبرترین شرکت‌های تامین کننده تبدیل شده است.",
        background: "/SliderCompany/04.jfif",
      },
    ],
  };

  const sliderRef = React.useRef(null);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleAfterChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: props.speed,
    autoplaySpeed: props.autoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // حذف دکمه‌های ناوبری
    afterChange: handleAfterChange,
  };

  const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
  return (
    <>
      <Grid item xs={12} sx={{ alignSelf: "center" }}>
        <Grid
          sx={{
            position: "absolute",
            width: "calc(90% + 2px )",
            margin: "auto",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bottom: { xs: "64%", sm: "63%", md: "54%", lg: "48%" },
            borderRadius: "0px 0px 10px 10px",
            zIndex: 1,
            height: "80px",
            // padding: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SvgIcon onClick={handlePrevSlide} sx={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="37"
              viewBox="0 0 19 37"
              fill="none"
            >
              <path
                d="M17 34.4554L3.63081 21.0962C2.05194 19.5185 2.05194 16.9368 3.63081 15.3592L17 2"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SvgIcon>
          <SvgIcon
            onClick={handleNextSlide}
            sx={{ cursor: "pointer", marginInlineStart: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="37"
              viewBox="0 0 19 37"
              fill="none"
            >
              <path
                d="M2.00012 34.4554L15.3693 21.0962C16.9482 19.5185 16.9482 16.9368 15.3693 15.3592L2.00012 2"
                stroke="white"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SvgIcon>
        </Grid>
        <Slider
          ref={sliderRef}
          {...settings}
          style={{ display: "flex", alignItems: "center" }}
        >
          {props?.data?.map((x) => {
            return (
              <Grid key={x}>
                <Grid sx={{ position: "relative" }}>
                  {/* <Box
                    component={'img'}
                    src={x.image}
                    alt="Slide 1"
                    sx={{
                      width: { xs: '100%', md: "30%" },
                      borderRadius: "12px",
                      margin: "auto",
                    }}
                  /> */}
                  <Grid
                    sx={{
                      width: { xs: "100%", md: "100%" },
                      height: { xs: "100%", md: "100%" },
                      margin: "auto",
                      backgroundImage: `url(${x.background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "100vh",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: "50px",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          fontWeight: 800,
                          fontSize: { xs: "25px", md: "41px" },
                          textAlign: "center",
                          marginBottom: "20px",
                          width: { xs: "90%", md: "100%" },
                          mt: "10px",
                          direction: "rtl",
                        }}
                      >
                        {x.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FFF",
                          textAlign: "justify",
                          direction: "rtl",
                          fontWeight: 200,
                          lineHeight: { md: "1.8" },
                          fontSize: { xs: "17px", md: "22px" },
                          width: { xs: "70%", md: "50%" },
                          p: { xs: "25px", sm: "0" },
                        }}
                      >
                        {x.text}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Slider>
      </Grid>
    </>
  );
};
export default SliderComponentText;
