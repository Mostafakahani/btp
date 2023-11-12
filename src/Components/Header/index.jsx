import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Box, Grid, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import Link from 'next/link';

const pages = [
  { name: 'راه های ارتباطی', path: '/Contact' },
  { name: 'دسته بندی کالا', path: '/Category' },
  { name: 'محصولات', path: '/Products' },
  { name: 'درباره شرکت', path: '/about' },
  { name: 'صفحه اصلی', path: '/' },
];


const Header = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(router.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageChange = (path) => {
    setActivePage(path);
    router.push(path);
    setDrawerOpen(false);
  };

  const list = (
    <Box
      sx={{
        width: '100vw', display: { xs: 'flex', md: 'none' },
        justifyContent: 'center',
        mt: '25px'
      }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center', my: '25px' }}>
          <Close sx={{ fontSize: '35px', cursor: 'pointer' }} onClick={() => setDrawerOpen(false)}
          />
        </Grid>
        <Grid sx={{ textAlign: '-webkit-center' }}>
          {pages.map((page) => (
            <Button
              key={page.path}
              sx={{
                flexDirection: 'column',
                display: { xs: 'flex', md: 'none' },
                direction: 'rtl',
                textAlign: 'center',
                '&:after': {
                  content: '""',
                  position: 'relative',
                  bottom: '-5px',
                  right: '30%',
                  width: '30%',
                  height: '2px',
                  transform: 'translate(100%)',
                  backgroundColor: activePage === page.path ? '#1F2241' : 'transparent',
                },
                color: '#1F2241',
                fontWeight: activePage === page.path ? '800' : '400',
                '&:hover': { backgroundColor: '#1f224108' },
                fontSize: '25px'
              }}
              onClick={() => handlePageChange(page.path)}
            >
              {page.name}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', my: '15px', borderRadius: '15px' }}>
        <Grid md={4} sx={{ display: { xs: 'none', md: 'unset' } }}></Grid>
        <Grid container xs={4} md={8} sx={{ display: 'flex', justifyContent: { md: 'center', xs: 'flex-start' }, }}>
          <Grid xs={4} sx={{ display: { xs: 'flex', md: 'none' }, }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <Menu />
            </IconButton>
            <Drawer variant='temporary' anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              {list}
            </Drawer>
          </Grid>
          {pages.map((page) => (
            <Button
              key={page.path}
              sx={{
                flexDirection: 'column',
                display: { xs: 'none', md: 'flex' },
                '&:after': {
                  content: '""',
                  position: 'relative',
                  bottom: '-5px',
                  right: '30%',
                  width: '30%',
                  height: '2px',
                  transform: 'translate(100%)',
                  backgroundColor: activePage === page.path ? '#1F2241' : 'transparent',
                },
                color: '#1F2241',
                fontWeight: activePage === page.path ? '800' : '400',
                '&:hover': { backgroundColor: '#1f224108' },
                fontSize: { xs: '12px', sm: '15px', md: '14px', lg: '16px' }
              }}
              onClick={() => handlePageChange(page.path)}
            >
              {page.name}
            </Button>
          ))}
        </Grid>
        <Grid xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end', md: 'flex-end' } }}>
          <Box component={'img'} src='/logo.png' sx={{ mr: { xs: '0px', md: '15px' } }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;


// <header style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//   <Grid container sx={{ my: '30px', justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' } }}>
//     <Grid sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center' , md: 'flex-end'}, mr: { sm: '-30px' } }}>
//       {pages.map((page) => (
//         <Button
//           key={page.path}
//           sx={{
//             flexDirection: 'column',
//             '&:after': {
//               content: '""',
//               position: 'relative',
//               bottom: '-5px',
//               right: '30%',
//               width: '30%',
//               height: '2px',
//               transform: 'translate(100%)',
//               backgroundColor: activePage === page.path ? '#1F2241' : 'transparent',
//             },
//             color: '#1F2241',
//             fontWeight: activePage === page.path ? '800' : '400',
//             '&:hover': { backgroundColor: '#1f224108' },
//             fontSize: { xs: '12px', sm: '15px' }
//           }}
//           onClick={() => handlePageChange(page.path)}
//         >
//           {page.name}
//         </Button>
//       ))}
//     </Grid>
//     <Grid xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' }, mt: { xs: '15px', md: '0px' } }}>
//       <Box component={'img'} src='/logo.png' sx={{ mr: { xs: '0px', md: '15px' } }} />
//     </Grid>
//   </Grid>
// </header>