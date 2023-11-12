import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";

const CompanyContact = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <Box sx={{
                    position: 'relative',
                    textAlign: 'center',
                    width: '100%',
                    height: '100px',
                    borderRadius: '13px',
                    background: 'linear-gradient(to top, #BF9D61, #F6D88C)',
                    left: '50%',
                    top: '50px',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Box sx={{
                        backgroundColor: '#1F2241',
                        borderRadius: '25px',
                        py: '20px',
                        px: '40px',
                        position: 'relative',
                        left: '50%',
                        bottom: '-55px',
                        transform: 'translate(-50%, -50%)',
                        width: { sm: '91%' },
                        zIndex: 20
                    }} >

                        <Grid container sx={{ my: '10px', position: 'relative' }}>
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'nowrap', justifyContent: 'space-around' }}>
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: "row", flexWrap: 'nowrap', my: { xs: '15px', sm: '0' } }}>
                                    <Typography sx={{ color: "#fff", width: '100%', display: 'flex', justifyContent: 'flex-start' }}>021-4462 7580</Typography>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography sx={{ color: '#FFFFFF66', fontWeight: 400 }}>:تلفن تماس</Typography>
                                        <SvgIcon sx={{ ml: '10px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.3834 18.0081C21.3834 18.3572 21.3089 18.7159 21.1505 19.065C20.9921 19.414 20.7872 19.7437 20.517 20.054C20.0605 20.5775 19.5575 20.9557 18.9892 21.1981C18.4302 21.4405 17.8247 21.5665 17.1726 21.5665C16.2223 21.5665 15.2069 21.3338 14.1355 20.8587C13.0642 20.3836 11.9929 19.7437 10.9308 18.9389C9.85948 18.1245 8.84403 17.2228 7.87517 16.2241C6.91561 15.2157 6.04922 14.1588 5.27599 13.0535C4.51208 11.9482 3.89722 10.8428 3.45005 9.74718C3.00288 8.64184 2.7793 7.58499 2.7793 6.57661C2.7793 5.91728 2.89109 5.28705 3.11467 4.70529C3.33826 4.11384 3.69227 3.57087 4.18602 3.08607C4.78224 2.47523 5.43437 2.17465 6.12375 2.17465C6.3846 2.17465 6.64545 2.23283 6.87835 2.34918C7.12057 2.46553 7.33484 2.64006 7.50252 2.89215L9.66384 6.06272C9.83153 6.30512 9.95264 6.52813 10.0365 6.74144C10.1203 6.94505 10.1669 7.14867 10.1669 7.33289C10.1669 7.56559 10.1017 7.7983 9.97127 8.0213C9.85016 8.24431 9.67316 8.47701 9.44957 8.70972L8.74156 9.47569C8.63908 9.58235 8.5925 9.7084 8.5925 9.86353C8.5925 9.9411 8.60182 10.009 8.62045 10.0865C8.6484 10.1641 8.67634 10.2223 8.69498 10.2805C8.86267 10.6004 9.15146 11.0173 9.56137 11.5215C9.98059 12.0257 10.4278 12.5396 10.9122 13.0535C11.4153 13.5674 11.8997 14.0425 12.3934 14.4788C12.8779 14.9054 13.2785 15.1963 13.5952 15.3708C13.6418 15.3902 13.6977 15.4193 13.7629 15.4484C13.8374 15.4775 13.912 15.4872 13.9958 15.4872C14.1542 15.4872 14.2753 15.429 14.3778 15.3223L15.0858 14.5952C15.3187 14.3528 15.5423 14.1685 15.7565 14.0522C15.9708 13.9164 16.1851 13.8486 16.418 13.8486C16.595 13.8486 16.7813 13.8873 16.9862 13.9746C17.1912 14.0619 17.4055 14.1879 17.6384 14.3528L20.722 16.6313C20.9642 16.8058 21.1319 17.0094 21.2344 17.2518C21.3275 17.4942 21.3834 17.7366 21.3834 18.0081Z" stroke="url(#paint0_linear_144_78)" stroke-width="1.3974" stroke-miterlimit="10" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_144_78" x1="10.5799" y1="38.3518" x2="10.4407" y2="-9.80712" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.0512162" stop-color="#BF9D61" />
                                                        <stop offset="0.748679" stop-color="#F6D88C" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </SvgIcon>
                                    </Grid>
                                </Grid>
                                {/* <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: "row", flexWrap: 'nowrap', my: { xs: '15px', sm: '0' } }}>
                                    <Typography sx={{ color: "#fff", width: '100%', display: 'flex', justifyContent: 'flex-start', fontWeight: 200 }}>info@btp.one</Typography>
                                    <Grid container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography sx={{ color: '#FFFFFF66', fontWeight: 400 }}>:ایمیل </Typography>
                                        <SvgIcon sx={{ ml: '10px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.7533 19.9932H7.43731C4.6425 19.9932 2.7793 18.5388 2.7793 15.1453V8.3581C2.7793 4.96452 4.6425 3.51013 7.43731 3.51013H16.7533C19.5482 3.51013 21.4114 4.96452 21.4114 8.3581V15.1453C21.4114 18.5388 19.5482 19.9932 16.7533 19.9932Z" stroke="url(#paint0_linear_144_122)" stroke-width="1.3974" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M16.753 8.84277L13.8371 11.2668C12.8776 12.0618 11.3032 12.0618 10.3436 11.2668L7.43701 8.84277" stroke="url(#paint1_linear_144_122)" stroke-width="1.3974" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_144_122" x1="10.5916" y1="34.2607" x2="10.4912" y2="-6.67447" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.0512162" stop-color="#BF9D61" />
                                                        <stop offset="0.748679" stop-color="#F6D88C" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_144_122" x1="11.3431" y1="14.4774" x2="11.3364" y2="6.97656" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.0512162" stop-color="#BF9D61" />
                                                        <stop offset="0.748679" stop-color="#F6D88C" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </SvgIcon>
                                    </Grid>
                                </Grid> */}
                                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: "row", flexWrap: 'nowrap', my: { xs: '15px', sm: '0' } }}>
                                    <Grid container>
                                        <Link href={'https://api.whatsapp.com/send?phone=989123654022&text=سلام%20آقای%20اشرافی،%20وقتتون%20بخیر.%20لطفا%20رزومه%20شرکت%20رو%20برای%20بنده%20ارسال%20کنید%20🙏🏻'} >
                                            <SvgIcon sx={{ mr: { xs: '4px', sm: '10px', md: '15px' }, cursor: 'pointer' }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4024 18.9688C12.2741 19.4918 13.3201 19.7533 14.3661 19.7533C17.5912 19.7533 20.1191 17.1383 20.1191 14.0875C20.1191 12.5185 19.5961 11.1238 18.4629 9.99063C17.3297 8.94463 15.9351 8.33447 14.3661 8.33447C11.2281 8.33447 8.61308 10.9495 8.61308 14.0875C8.61308 15.1335 8.87458 16.1795 9.48475 17.1383L9.65909 17.3998L9.04891 19.4918L11.2281 18.8816L11.4024 18.9688ZM16.2837 14.872C16.4581 14.872 17.3297 15.3078 17.5041 15.395C17.5312 15.4085 17.5584 15.42 17.5852 15.4313C17.7306 15.4927 17.8663 15.55 17.9399 15.918C18.0271 15.918 18.0271 16.2666 17.8527 16.7025C17.7656 17.0511 17.0682 17.487 16.7196 17.487C16.6605 17.487 16.6039 17.492 16.5435 17.4973C16.2473 17.5235 15.8583 17.5579 14.6276 17.0511C13.1 16.4401 12.0409 14.959 11.7435 14.5432C11.7015 14.4844 11.6747 14.4469 11.6639 14.4361C11.6491 14.4064 11.6191 14.3591 11.5795 14.2966C11.3867 13.9921 10.9666 13.3289 10.9666 12.6056C10.9666 11.734 11.4024 11.2981 11.5767 11.1238C11.7511 10.9495 11.9254 10.9495 12.0126 10.9495H12.3613C12.4484 10.9495 12.6228 10.9495 12.7099 11.211C12.8842 11.5596 13.2329 12.4313 13.2329 12.5185C13.2329 12.5475 13.2426 12.5766 13.2523 12.6056C13.2717 12.6637 13.291 12.7218 13.2329 12.78C13.1893 12.8235 13.1675 12.8671 13.1458 12.9107C13.124 12.9543 13.1022 12.9979 13.0586 13.0415L12.7971 13.303C12.7099 13.3901 12.6228 13.4773 12.7099 13.6516C12.7971 13.826 13.1458 14.4361 13.6688 14.872C14.2572 15.3869 14.7215 15.5914 14.9569 15.6951C15.0005 15.7143 15.0362 15.73 15.0634 15.7436C15.2377 15.7436 15.3249 15.7436 15.4121 15.6565C15.4557 15.5693 15.5646 15.4385 15.6736 15.3078C15.7825 15.177 15.8915 15.0463 15.9351 14.9591C16.0222 14.7848 16.1094 14.7848 16.2837 14.872Z" fill="url(#paint0_linear_33_564)" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.419434 14.0003C0.419434 6.29777 6.66356 0.0536499 14.3661 0.0536499C22.0686 0.0536499 28.3127 6.29777 28.3127 14.0003C28.3127 21.7028 22.0686 27.9469 14.3661 27.9469C6.66356 27.9469 0.419434 21.7028 0.419434 14.0003ZM14.3661 7.02697C16.1966 7.02697 17.9399 7.72431 19.2474 9.0318C20.5549 10.3393 21.3394 12.0826 21.3394 13.9131C21.3394 17.7485 18.2014 20.8864 14.3661 20.8864C13.2329 20.8864 12.0998 20.5378 11.0538 20.0148L7.39275 20.9736L8.35159 17.487C7.74143 16.441 7.39275 15.2206 7.39275 14.0003C7.39275 10.165 10.5307 7.02697 14.3661 7.02697Z" fill="url(#paint1_linear_33_564)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_33_564" x1="12.1149" y1="52.0908" x2="11.9229" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_33_564" x1="12.1149" y1="52.0908" x2="11.9229" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </SvgIcon>
                                        </Link>
                                        <Link href={'https://t.me/btp_one'}>
                                            <SvgIcon sx={{ mr: { xs: '4px', sm: '10px', md: '15px' }, cursor: 'pointer' }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2806 27.9469C6.57811 27.9469 0.333984 21.7028 0.333984 14.0003C0.333984 6.29777 6.57811 0.0536499 14.2806 0.0536499C21.9831 0.0536499 28.2273 6.29777 28.2273 14.0003C28.2273 21.7028 21.9831 27.9469 14.2806 27.9469ZM14.8837 10.5201C13.6346 11.0396 11.1382 12.1149 7.3944 13.746C6.78647 13.9878 6.46801 14.2243 6.43902 14.4555C6.39002 14.8464 6.87945 15.0003 7.54591 15.2098C7.63657 15.2383 7.7305 15.2679 7.8268 15.2992C8.4825 15.5123 9.36454 15.7617 9.82307 15.7716C10.239 15.7806 10.7032 15.6091 11.2158 15.2571C14.7137 12.896 16.5193 11.7025 16.6327 11.6768C16.7126 11.6586 16.8235 11.6358 16.8986 11.7025C16.9737 11.7693 16.9663 11.8957 16.9583 11.9296C16.9098 12.1363 14.9887 13.9224 13.9945 14.8467C13.6845 15.1348 13.4647 15.3392 13.4197 15.3859C13.3191 15.4905 13.2164 15.5894 13.1178 15.6844C12.5087 16.2717 12.0519 16.712 13.1431 17.4312C13.6675 17.7768 14.0872 18.0625 14.5058 18.3476C14.963 18.659 15.4191 18.9695 16.0091 19.3563C16.1594 19.4548 16.303 19.5572 16.4428 19.6569C16.9749 20.0362 17.4529 20.377 18.0435 20.3226C18.3866 20.2911 18.7411 19.9684 18.9211 19.006C19.3466 16.7316 20.1828 11.8038 20.3761 9.77312C20.393 9.59521 20.3717 9.36752 20.3546 9.26757C20.3375 9.16761 20.3018 9.0252 20.1718 8.91978C20.018 8.79493 19.7804 8.7686 19.6742 8.77038C19.1912 8.77898 18.4501 9.03666 14.8837 10.5201Z" fill="url(#paint0_linear_33_566)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_33_566" x1="12.0294" y1="52.0908" x2="11.8374" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </SvgIcon>
                                        </Link>
                                        <Link href={'http://instagram.com/btp.one/'}>
                                            <SvgIcon sx={{ mr: { xs: '4px', sm: '10px', md: '15px' }, cursor: 'pointer' }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                    <path d="M14.1957 16.441C12.8882 16.441 11.755 15.395 11.755 14.0003C11.755 12.6928 12.801 11.5596 14.1957 11.5596C15.5032 11.5596 16.6363 12.6056 16.6363 14.0003C16.6363 15.3078 15.5032 16.441 14.1957 16.441Z" fill="url(#paint0_linear_33_568)" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1593 8.07297H11.232C10.5347 8.16013 10.186 8.2473 9.92451 8.33447C9.57584 8.42163 9.31434 8.59597 9.05284 8.85747C8.84592 9.06439 8.74815 9.27131 8.62998 9.52142C8.59884 9.58733 8.56619 9.65643 8.52984 9.72913C8.51636 9.76958 8.50079 9.81212 8.4841 9.85772C8.39291 10.1069 8.26834 10.4472 8.26834 11.0366V16.964C8.35551 17.6613 8.44268 18.0099 8.52984 18.2714C8.61701 18.6201 8.79134 18.8816 9.05284 19.1431C9.25976 19.35 9.46669 19.4478 9.7168 19.566C9.78276 19.5971 9.85174 19.6297 9.92451 19.6661C9.96496 19.6796 10.0075 19.6952 10.0531 19.7119C10.3022 19.803 10.6425 19.9276 11.232 19.9276H17.1593C17.8567 19.8404 18.2053 19.7533 18.4668 19.6661C18.8155 19.5789 19.077 19.4046 19.3385 19.1431C19.5454 18.9362 19.6432 18.7293 19.7613 18.4792C19.7925 18.4132 19.8251 18.3442 19.8615 18.2714C19.875 18.231 19.8905 18.1885 19.9072 18.1429C19.9984 17.8937 20.123 17.5534 20.123 16.964V11.0366C20.0358 10.3393 19.9487 9.99063 19.8615 9.72913C19.7743 9.38046 19.6 9.11897 19.3385 8.85747C19.1316 8.65054 18.9246 8.55278 18.6745 8.43461C18.6087 8.40349 18.5395 8.37079 18.4668 8.33447C18.4264 8.32098 18.3838 8.30541 18.3382 8.28872C18.0891 8.19753 17.7488 8.07297 17.1593 8.07297ZM14.1957 10.2521C12.1037 10.2521 10.4475 11.9083 10.4475 14.0003C10.4475 16.0923 12.1037 17.7484 14.1957 17.7484C16.2877 17.7484 17.9438 16.0923 17.9438 14.0003C17.9438 11.9083 16.2877 10.2521 14.1957 10.2521ZM18.9027 10.165C18.9027 10.6464 18.5124 11.0366 18.031 11.0366C17.5496 11.0366 17.1593 10.6464 17.1593 10.165C17.1593 9.68356 17.5496 9.2933 18.031 9.2933C18.5124 9.2933 18.9027 9.68356 18.9027 10.165Z" fill="url(#paint1_linear_33_568)" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.249023 14.0003C0.249023 6.29777 6.49315 0.0536499 14.1957 0.0536499C21.8982 0.0536499 28.1423 6.29777 28.1423 14.0003C28.1423 21.7028 21.8982 27.9469 14.1957 27.9469C6.49315 27.9469 0.249023 21.7028 0.249023 14.0003ZM11.232 6.76547H17.1593C17.9438 6.85263 18.4668 6.9398 18.9027 7.11414C19.4257 7.37564 19.7743 7.54997 20.2102 7.9858C20.646 8.42163 20.9075 8.85747 21.0818 9.2933C21.2562 9.72913 21.4305 10.2521 21.4305 11.0366V16.964C21.3433 17.7484 21.2562 18.2714 21.0818 18.7073C20.8203 19.2303 20.646 19.5789 20.2102 20.0148C19.7743 20.4506 19.3385 20.7121 18.9027 20.8864C18.4668 21.0608 17.9438 21.2351 17.1593 21.2351H11.232C10.4475 21.1479 9.92451 21.0608 9.48867 20.8864C8.96567 20.6249 8.61701 20.4506 8.18118 20.0148C7.74534 19.5789 7.48384 19.1431 7.30951 18.7073C7.13518 18.2714 6.96084 17.7484 6.96084 16.964V11.0366C7.04801 10.2521 7.13518 9.72913 7.30951 9.2933C7.57101 8.7703 7.74534 8.42163 8.18118 7.9858C8.61701 7.54997 9.05284 7.28847 9.48867 7.11414C9.92451 6.9398 10.4475 6.76547 11.232 6.76547Z" fill="url(#paint2_linear_33_568)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_33_568" x1="11.9445" y1="52.0908" x2="11.7524" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_33_568" x1="11.9445" y1="52.0908" x2="11.7524" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                        <linearGradient id="paint2_linear_33_568" x1="11.9445" y1="52.0908" x2="11.7524" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </SvgIcon>
                                        </Link>
                                        <Link href={'https://www.linkedin.com/company/btp-one/'}>
                                            <SvgIcon sx={{ mr: { xs: '4px', sm: '10px', md: '15px' }, cursor: 'pointer' }} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.163574 14.0003C0.163574 6.29777 6.4077 0.0536499 14.1102 0.0536499C21.8127 0.0536499 28.0569 6.29777 28.0569 14.0003C28.0569 21.7028 21.8127 27.9469 14.1102 27.9469C6.4077 27.9469 0.163574 21.7028 0.163574 14.0003ZM7.31123 11.6468V20.9736H10.2749V11.6468H7.31123ZM7.1369 8.68314C7.1369 9.64197 7.83423 10.3393 8.79306 10.3393C9.75189 10.3393 10.4492 9.64197 10.4492 8.68314C10.4492 7.72431 9.75189 7.02697 8.79306 7.02697C7.9214 7.02697 7.1369 7.72431 7.1369 8.68314ZM18.1199 20.9736H20.9092V15.2206C20.9092 12.3441 19.1659 11.3853 17.5097 11.3853C16.0279 11.3853 14.9819 12.3441 14.7204 12.9543V11.6468H11.9311V20.9736H14.8947V16.0051C14.8947 14.6976 15.7664 14.0003 16.638 14.0003C17.5097 14.0003 18.1199 14.4361 18.1199 15.918V20.9736Z" fill="url(#paint0_linear_33_570)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_33_570" x1="11.859" y1="52.0908" x2="11.667" y2="-17.181" gradientUnits="userSpaceOnUse">
                                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </SvgIcon>
                                        </Link>
                                    </Grid>

                                    <Grid container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography sx={{ color: '#FFFFFF', fontWeight: 400 , fontSize: {xs: '13px', sm: '1rem'}}}>شبکه های اجتماعی </Typography>

                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ my: '10px' }}>
                                <Typography variant="h5" sx={{ color: "#FFF", textAlign: 'right', mb: '10px', fontWeight: 600, fontSize: { xs: '17px', sm: '25px' } }}>شرکت بازرگانی بارمان تجارت پایدار</Typography>
                                <Typography variant="body2" sx={{ color: "#FFF", textAlign: 'right', direction: 'rtl', fontWeight: 200, fontSize: '16px' }}>
                                    وارد کننده مواد اولیه صنایع غذایی، شیمیایی، آرایشی، بهداشتی و دارویی، بهترین و با کیفیت ترین مواد اولیه را به شما مشتریان عزیز ارائه می‌دهد...
                                </Typography>
                            </Grid>


                        </Grid>
                    </Box>
                </Box>
            </Grid>

        </>
    )
}
export default CompanyContact;