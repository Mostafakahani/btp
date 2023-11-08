import React, { useState } from 'react';
import Head from 'next/head';
import { CssBaseline, AppBar, Toolbar, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { useRouter } from 'next/router';

const steps = ['صفحه اصلی', 'درباره شرکت', 'دسته بندی کالا', 'راه های ارتباطی'];

const Header = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
    router.push(`/${steps[stepIndex].replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <>
      <CssBaseline />
      <Head>
        <title>وب‌سایت شما</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            لوگو یا نام شرکت
          </Typography>
          {steps.map((label, index) => (
            <React.Fragment key={label}>
              <div
                className={`header-button ${activeStep === index ? 'active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                {label}
                {activeStep === index && <div className="line"></div>}
              </div>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
