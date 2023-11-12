import { Box, Button, Grid, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactItems = ({ texts }) => {


    return (
        <Grid item xs={12} md={4}>
            <Grid sx={{
                borderRadius: '25px', backgroundColor: '#1F2241', display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'column', py: '30px', px: "35px", transition: '1s',
                '&:hover': {
                    transition: '1s',
                    backgroundColor: '#262a57'
                }
            }}>
                <Box component={'img'} sx={{
                    borderRadius: "50%", width: '150px', height: 'auto', backgroundPosition: 'center',
                }} src={texts.img} />
                <Typography sx={{
                    background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    fontWeight: 800,
                    fontSize: { xs: '25px', sm: '2rem' },
                    textAlign: 'center',
                    marginBottom: '20px',
                    width: '100%',
                    mt: '10px'
                }}>
                    {texts.titleName}
                </Typography>

                <Typography sx={{ color: '#FFF', mb: '10px', fontWeight: 200 }}>{texts.subTitle}</Typography>


                <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: 'flex-start', flexDirection: 'column', }}>
                    <Link href={texts.LinkedInLink}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', my: '10px' }}>
                            <SvgIcon sx={{ mr: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <path d="M8.07453 9.9838H4.12833C3.99751 9.9838 3.87204 10.0379 3.77954 10.1342C3.68703 10.2305 3.63506 10.361 3.63506 10.4972V22.8186C3.63506 22.9547 3.68703 23.0853 3.77954 23.1816C3.87204 23.2779 3.99751 23.332 4.12833 23.332H8.07453C8.20536 23.332 8.33083 23.2779 8.42333 23.1816C8.51584 23.0853 8.56781 22.9547 8.56781 22.8186V10.4972C8.56781 10.361 8.51584 10.2305 8.42333 10.1342C8.33083 10.0379 8.20536 9.9838 8.07453 9.9838ZM7.58126 22.3052H4.62161V11.0106H7.58126V22.3052ZM18.4333 9.9838C17.3629 9.9838 16.3221 10.3514 15.4737 11.0301V10.4972C15.4737 10.361 15.4217 10.2305 15.3292 10.1342C15.2367 10.0379 15.1112 9.9838 14.9804 9.9838H11.0342C10.9034 9.9838 10.7779 10.0379 10.6854 10.1342C10.5929 10.2305 10.5409 10.361 10.5409 10.4972V22.8186C10.5409 22.9547 10.5929 23.0853 10.6854 23.1816C10.7779 23.2779 10.9034 23.332 11.0342 23.332H14.9804C15.1112 23.332 15.2367 23.2779 15.3292 23.1816C15.4217 23.0853 15.4737 22.9547 15.4737 22.8186V17.1713C15.4737 16.7628 15.6296 16.371 15.9071 16.0822C16.1846 15.7934 16.561 15.6311 16.9535 15.6311C17.346 15.6311 17.7224 15.7934 17.9999 16.0822C18.2774 16.371 18.4333 16.7628 18.4333 17.1713V22.8186C18.4333 22.9547 18.4853 23.0853 18.5778 23.1816C18.6703 23.2779 18.7958 23.332 18.9266 23.332H22.8728C23.0036 23.332 23.1291 23.2779 23.2216 23.1816C23.3141 23.0853 23.3661 22.9547 23.3661 22.8186V15.1177C23.3645 13.7566 22.8443 12.4517 21.9196 11.4893C20.9948 10.5269 19.7411 9.98543 18.4333 9.9838ZM22.3795 22.3052H19.4199V17.1713C19.4199 16.4905 19.16 15.8376 18.6975 15.3562C18.2349 14.8748 17.6076 14.6043 16.9535 14.6043C16.2994 14.6043 15.672 14.8748 15.2095 15.3562C14.747 15.8376 14.4871 16.4905 14.4871 17.1713V22.3052H11.5275V11.0106H14.4871V12.2458C14.4871 12.3521 14.5188 12.4559 14.5778 12.5426C14.6369 12.6294 14.7204 12.695 14.8167 12.7302C14.9131 12.7655 15.0176 12.7688 15.1159 12.7396C15.2141 12.7104 15.3012 12.6501 15.3651 12.5672C15.8718 11.8988 16.5661 11.4117 17.3515 11.1737C18.1368 10.9356 18.9739 10.9586 19.7461 11.2394C20.5183 11.5202 21.187 12.0447 21.6591 12.74C22.1312 13.4352 22.383 14.2664 22.3795 15.1177V22.3052ZM6.46448 2.79838C6.34856 2.78988 6.23224 2.7892 6.11623 2.79633C5.74703 2.77019 5.37661 2.82321 5.0279 2.95213C4.6792 3.08105 4.35964 3.28312 4.08902 3.54581C3.8184 3.8085 3.60249 4.12622 3.45466 4.4793C3.30682 4.83237 3.23022 5.21328 3.22959 5.59842C3.22652 5.97954 3.29872 6.35725 3.4417 6.70813C3.58467 7.05901 3.79539 7.37558 4.06077 7.63821C4.32615 7.90084 4.64054 8.10392 4.98444 8.23488C5.32835 8.36583 5.69443 8.42185 6.06 8.39948H6.08762C6.44099 8.42523 6.79576 8.3783 7.1317 8.26135C7.46763 8.1444 7.77814 7.95974 8.04551 7.71789C8.31287 7.47605 8.53185 7.18176 8.68993 6.85184C8.84802 6.52192 8.94212 6.16282 8.96687 5.79505C8.99161 5.42727 8.94652 5.05803 8.83415 4.7084C8.72179 4.35876 8.54436 4.03559 8.31199 3.75732C8.07962 3.47905 7.79687 3.25115 7.47987 3.08661C7.16288 2.92208 6.81785 2.82414 6.46448 2.79838ZM6.42996 7.37578C6.31603 7.38656 6.20135 7.38553 6.08762 7.3727H6.06C5.82256 7.39127 5.58402 7.35812 5.35959 7.27535C5.13515 7.19258 4.92977 7.06201 4.75655 6.89198C4.58333 6.72196 4.44608 6.5162 4.35355 6.28786C4.26103 6.05952 4.21527 5.81361 4.2192 5.56583C4.22312 5.31805 4.27665 5.07385 4.37635 4.84881C4.47606 4.62376 4.61975 4.42283 4.79827 4.25884C4.97678 4.09485 5.18619 3.9714 5.41312 3.89638C5.64005 3.82135 5.87951 3.7964 6.11623 3.82311C6.56889 3.77981 7.01953 3.92544 7.36902 4.22795C7.71851 4.53046 7.93822 4.96507 7.97983 5.43619C8.02143 5.9073 7.88151 6.37632 7.59085 6.74006C7.3002 7.10381 6.88261 7.33248 6.42996 7.37578Z" fill="url(#paint0_linear_26_369)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_26_369" x1="11.6726" y1="41.1129" x2="11.5283" y2="-9.90266" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </SvgIcon>
                            <Typography sx={{ width: '100%', textAlign: 'start', color: '#fff', fontWeight: 200 }}>{texts.LinkedIn}</Typography>
                        </Grid>
                    </Link>
                    {/* <Link href={texts.emailLink}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', my: '10px' }}>
                            <SvgIcon sx={{ mr: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <path d="M17.4467 21.4792H7.58119C4.62154 21.4792 2.64844 19.939 2.64844 16.3452V9.15777C2.64844 5.56404 4.62154 4.02386 7.58119 4.02386H17.4467C20.4063 4.02386 22.3794 5.56404 22.3794 9.15777V16.3452C22.3794 19.939 20.4063 21.4792 17.4467 21.4792Z" stroke="url(#paint0_linear_26_364)" stroke-width="1.47983" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.4466 9.67107L14.3586 12.238C13.3425 13.08 11.6752 13.08 10.6591 12.238L7.58105 9.67107" stroke="url(#paint1_linear_26_364)" stroke-width="1.47983" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_26_364" x1="10.9215" y1="36.5881" x2="10.8152" y2="-6.76144" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_26_364" x1="11.7176" y1="15.638" x2="11.7104" y2="7.69478" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </SvgIcon>
                            <Typography sx={{ width: '100%', textAlign: 'start', color: '#fff', fontWeight: 200 }}>{texts.email}</Typography>
                        </Grid>
                    </Link> */}

                    <Link href={texts.numberLink}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', my: '10px' }}>
                            <SvgIcon sx={{ mr: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <path d="M22.3498 19.5562C22.3498 19.9258 22.2709 20.3057 22.1032 20.6754C21.9355 21.045 21.7185 21.3941 21.4324 21.7227C20.9489 22.2772 20.4162 22.6776 19.8144 22.9343C19.2225 23.191 18.5812 23.3245 17.8906 23.3245C16.8844 23.3245 15.809 23.078 14.6745 22.5749C13.54 22.0718 12.4054 21.3941 11.2808 20.5419C10.1462 19.6794 9.07088 18.7245 8.04487 17.6669C7.02872 16.599 6.11123 15.4799 5.29239 14.3093C4.48342 13.1388 3.8323 11.9683 3.35875 10.808C2.88521 9.63747 2.64844 8.51828 2.64844 7.45042C2.64844 6.75221 2.76682 6.0848 3.0036 5.46873C3.24037 4.8424 3.61526 4.2674 4.13813 3.75401C4.76952 3.10714 5.46011 2.78883 6.19015 2.78883C6.46639 2.78883 6.74262 2.85044 6.98926 2.97365C7.24576 3.09687 7.47267 3.28169 7.65025 3.54865L9.93904 6.90623C10.1166 7.16292 10.2449 7.39908 10.3337 7.62498C10.4225 7.8406 10.4718 8.05622 10.4718 8.25131C10.4718 8.49774 10.4027 8.74417 10.2646 8.98033C10.1364 9.21649 9.94891 9.46292 9.71214 9.70934L8.96236 10.5205C8.85384 10.6334 8.80451 10.7669 8.80451 10.9312C8.80451 11.0134 8.81438 11.0852 8.83411 11.1674C8.8637 11.2495 8.8933 11.3111 8.91303 11.3727C9.09061 11.7116 9.39644 12.1531 9.83052 12.687C10.2745 13.2209 10.748 13.7651 11.261 14.3093C11.7938 14.8535 12.3068 15.3566 12.8296 15.8187C13.3426 16.2705 13.7669 16.5785 14.1023 16.7633C14.1516 16.7839 14.2108 16.8147 14.2799 16.8455C14.3588 16.8763 14.4377 16.8865 14.5265 16.8865C14.6942 16.8865 14.8225 16.8249 14.931 16.712L15.6808 15.9419C15.9274 15.6852 16.1642 15.4901 16.3911 15.3669C16.618 15.2232 16.8449 15.1513 17.0915 15.1513C17.279 15.1513 17.4763 15.1924 17.6933 15.2848C17.9104 15.3772 18.1373 15.5107 18.3839 15.6852L21.6494 18.0982C21.9059 18.283 22.0835 18.4986 22.192 18.7553C22.2907 19.012 22.3498 19.2687 22.3498 19.5562Z" stroke="url(#paint0_linear_26_352)" stroke-width="1.47983" stroke-miterlimit="10" />
                                    <defs>
                                        <linearGradient id="paint0_linear_26_352" x1="10.9091" y1="41.0997" x2="10.7617" y2="-9.89964" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.0512162" stop-color="#BF9D61" />
                                            <stop offset="0.748679" stop-color="#F6D88C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </SvgIcon>
                            <Typography sx={{ width: '100%', textAlign: 'start', color: '#fff', fontWeight: 200 }}>{texts.number}</Typography>
                        </Grid>
                    </Link>
                </Grid>
                <Button href={texts.whatsappLink} variant="contained" sx={{ color: '#fff', backgroundColor: '#FFFFFF1A', fontWeight: 200, fontSize: { xs: '15px', sm: '18px' }, borderRadius: "15px", px: '45px', py: '10px', width: '100%', '&:hover': { backgroundColor: '#ffffff12', transition: '.5s' } }}>
                    ارتباط در واتس اپ
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                            <path d="M12.5996 23.7369C14.215 24.7061 16.1534 25.2445 18.0918 25.2445C24.0148 25.2445 28.8609 20.3984 28.8609 14.4755C28.8609 8.55247 24.0148 3.70639 18.0918 3.70639C12.1688 3.70639 7.32275 8.55247 7.32275 14.4755C7.32275 16.4139 7.86121 18.2446 8.72273 19.86L7.79707 23.4202C7.58737 24.2268 8.33389 24.9556 9.13517 24.7267L12.5996 23.7369Z" stroke="url(#paint0_linear_26_459)" stroke-width="1.61536" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.9383 17.543C22.9383 17.7175 22.8994 17.8968 22.8169 18.0712C22.7344 18.2457 22.6276 18.4105 22.4869 18.5655C22.2491 18.8272 21.987 19.0162 21.6909 19.1374C21.3997 19.2585 21.0843 19.3215 20.7445 19.3215C20.2495 19.3215 19.7205 19.2052 19.1623 18.9678C18.6042 18.7303 18.0461 18.4105 17.4928 18.0082C16.9346 17.6012 16.4056 17.1505 15.9009 16.6513C15.401 16.1473 14.9496 15.6191 14.5468 15.0667C14.1488 14.5142 13.8285 13.9618 13.5955 13.4142C13.3626 12.8617 13.2461 12.3335 13.2461 11.8295C13.2461 11.5 13.3043 11.185 13.4208 10.8942C13.5373 10.5986 13.7217 10.3272 13.979 10.0849C14.2896 9.77959 14.6293 9.62936 14.9885 9.62936C15.1243 9.62936 15.2602 9.65844 15.3816 9.71659C15.5078 9.77475 15.6194 9.86198 15.7067 9.98797L16.8327 11.5726C16.9201 11.6938 16.9832 11.8053 17.0269 11.9119C17.0705 12.0136 17.0948 12.1154 17.0948 12.2075C17.0948 12.3238 17.0608 12.4401 16.9929 12.5516C16.9298 12.663 16.8376 12.7793 16.7211 12.8956L16.3522 13.2785C16.2989 13.3318 16.2746 13.3948 16.2746 13.4723C16.2746 13.5111 16.2794 13.545 16.2892 13.5838C16.3037 13.6225 16.3183 13.6516 16.328 13.6807C16.4153 13.8406 16.5658 14.049 16.7793 14.301C16.9977 14.553 17.2307 14.8098 17.4831 15.0667C17.7452 15.3235 17.9975 15.561 18.2548 15.779C18.5071 15.9923 18.7158 16.1377 18.8808 16.2249C18.9051 16.2346 18.9342 16.2491 18.9682 16.2636C19.007 16.2782 19.0459 16.283 19.0895 16.283C19.172 16.283 19.2351 16.254 19.2885 16.2006L19.6574 15.8372C19.7787 15.716 19.8952 15.624 20.0068 15.5658C20.1185 15.498 20.2301 15.464 20.3514 15.464C20.4436 15.464 20.5407 15.4834 20.6475 15.527C20.7542 15.5707 20.8659 15.6337 20.9872 15.716L22.5937 16.8549C22.7199 16.9421 22.8072 17.0439 22.8606 17.165C22.9091 17.2862 22.9383 17.4073 22.9383 17.543Z" stroke="url(#paint1_linear_26_459)" stroke-width="1.29229" stroke-miterlimit="10" />
                            <defs>
                                <linearGradient id="paint0_linear_26_459" x1="16.3535" y1="43.8875" x2="16.2053" y2="-9.60153" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0512162" stop-color="#BF9D61" />
                                    <stop offset="0.748679" stop-color="#F6D88C" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_26_459" x1="17.3099" y1="27.7109" x2="17.2432" y2="3.6408" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0512162" stop-color="#BF9D61" />
                                    <stop offset="0.748679" stop-color="#F6D88C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </SvgIcon>
                </Button>

            </Grid>
        </Grid >
    );
}
export default ContactItems;