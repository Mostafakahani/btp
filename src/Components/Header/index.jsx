import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Box, Grid } from '@mui/material';
// import { FaGlobe } from 'react-icons/fa';

const pages = [
  { name: 'صفحه اصلی', path: '/' },
  { name: 'درباره شرکت', path: '/about' },
  { name: 'دسته بندی کالا', path: '/Category' },
  { name: 'راه های ارتباطی', path: '/Contact' },
];

const Header = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(router.pathname);

  const handlePageChange = (path) => {
    setActivePage(path);
    router.push(path);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Grid container sx={{ my: '30px', justifyContent: 'flex-end' }}>
        <Grid sx={{ display: 'flex', justifyContent: 'flex-end', mr: '-50px' }}>
          {pages.map((page) => (
            <Button
              key={page.path}
              sx={{
                flexDirection: 'column',
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
              }}
              onClick={() => handlePageChange(page.path)}
            >
              {page.name}
            </Button>
          ))}
        </Grid>
        <Grid xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box component={'img'} src='/logo.png' sx={{ mr: '15px' }} />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;