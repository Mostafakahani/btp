import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Grid, SvgIcon, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import Link from "next/link";

const SliderComponent = () => {
  const props = {
    speed: 500,
    autoplaySpeed: 400000,
    data: [
      // {
      //   id: 2,
      //   image: "/sliderhome/02.png",
      //   title: "Earn money from xoxxel",
      // },
      {
        id: 1,
        image: "/sliderhome/1212.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 2,
        image: "/sliderhome/0707.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 3,
        image: "/sliderhome/1010.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 4,
        image: "/sliderhome/0909.png",
        title: "Earn money from xoxxel",
      },
      {
        id: 5,
        image: "/ProductsImages/inPage/2020.png",
        title: "Earn money from xoxxel",
      },

      // {
      //   id: 7,
      //   image: "/sliderhome/07.png",
      //   title: "Earn money from xoxxel",
      // },
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
    <Grid
      container
      // sx={{ mt: "15px" }}
      spacing={2}
    >
      <Grid
        sx={{
          position: "absolute",
          width: "calc(90% + 2px )",
          margin: "auto",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bottom: { xs: "87%", sm: "83%", md: "80%", lg: "80%" },
          borderRadius: "0px 0px 10px 10px",
          zIndex: 1,
          height: "80px",
          padding: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Button variant="text" sx={{ color: "#3D3F61" }} size="small" onClick={handlePrevSlide}> */}
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
              stroke="#3D3F61"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SvgIcon>
        {/* </Button> */}
        {/* <Button variant="text" sx={{ marginInlineStart: "auto", color: "#3D3F61" }} size="small" onClick={handleNextSlide}> */}
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
              stroke="#3D3F61"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SvgIcon>
        {/* </Button> */}
      </Grid>
      <Grid item xs={12} sx={{ alignSelf: "center" }}>
        <Slider
          ref={sliderRef}
          {...settings}
          style={{ display: "flex", alignItems: "center" }}
        >
          {props?.data?.map((x) => {
            return (
              <Grid key={x}>
                <Grid sx={{ position: "relative" }}>
                  {/* <Grid sx={{ position: "relative" }}>
                    <Box
                      component={'img'}
                      src="/sliderhome/cir.png"
                      sx={{ position: 'relative' }}
                    /> */}
                  <Box
                    component={"img"}
                    src={x.image}
                    alt="Slide 1"
                    sx={{
                      width: { xs: "100%", sm: "60%", md: "30%" },
                      borderRadius: "12px",
                      margin: "auto",
                      // position: "absolute"
                    }}
                  />
                  {/* </Grid> */}
                </Grid>
              </Grid>
            );
          })}
        </Slider>
      </Grid>
    </Grid>
  );
};
export default SliderComponent;
