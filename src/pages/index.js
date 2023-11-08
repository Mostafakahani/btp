import React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AboutCompany from './AboutCompany';
import ProductCategory from './ProductCategory';
import Contact from './Contact';
import Home from './Home';

const pages = [
  { component: <Home />, label: 'صفحه اصلی' },
  { component: <AboutCompany />, label: 'درباره شرکت' },
  { component: <ProductCategory />, label: 'دسته بندی کالا' },
  { component: <Contact />, label: 'راه های ارتباطی' },
];

export default function DotsMobileStepper({ activeStep, handleNext, handleBack }) {
  const theme = useTheme();

  const currentPage = pages[activeStep];

  return (
    <div>
      {/* {currentPage.component} */}
      <MobileStepper
        variant="dots"
        steps={pages.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === pages.length - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
