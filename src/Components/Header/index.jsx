import React, { useState } from 'react';
import Head from 'next/head';
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex, path) => {
    setActiveStep(stepIndex);
    router.push(`/${path}`);
  };

  const steps = [
    { label: 'صفحه اصلی', path: '' },
    { label: 'درباره شرکت', path: 'AboutCompany' },
    { label: 'دسته بندی کالا', path: 'ProductCategory' },
    { label: 'راه های ارتباطی', path: 'Contact' },
  ];

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
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              <div
                className={`header-button ${activeStep === index ? 'active' : ''}`}
                onClick={() => handleStepClick(index, step.path)}
              >
                {step.label}
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
