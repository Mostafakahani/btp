import React from 'react';
import { Grid, Typography, Divider, Box } from '@mui/material';
import Link from 'next/link';

const MyComponent = ({ data }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ my: '150px' }}>
      <Grid item>
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            width: '334px',
            height: '20px',
            borderRadius: '13px',
            background: 'linear-gradient(to top, #BF9D61, #F6D88C)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'grid',
            gap: '20px', // تنظیم فاصله بین سلول‌ها
            gridTemplateColumns: 'repeat(3, 1fr)', // تنظیم تعداد ستون‌ها و نسبت آن‌ها به هم
          }}
        >
          <Box
            sx={{
              backgroundColor: '#1F2241',
              borderRadius: '25px',
              py: '20px',
              px: '40px',
              position: 'relative',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '225px',
              zIndex: 20,
              display: 'grid',
              gap: '10px', // تنظیم فاصله بین سلول‌ها
              gridTemplateColumns: 'repeat(3, 1fr)', // تنظیم تعداد ستون‌ها و نسبت آن‌ها به هم
            }}
          >
            <Typography
              sx={{
                background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800,
                fontSize: '2rem',
                textAlign: 'center',
                gridColumn: 'span 3', // تنظیم عرض متن در سه ستون
                marginBottom: '20px',
              }}
            >
              SSS
            </Typography>
            {data.map((item, index) => (
              <Box key={index} sx={{ color: '#fff', marginBottom: '10px', gridColumn: 'span 1' }}>
                <Link href={item.link}>
                  <Typography sx={{ my: '12px', fontSize: '20px', color: '#fff' }}>{item.text}</Typography>
                </Link>
                {index !== data.length - 1 && (
                  <hr style={{ border: '1px dashed rgba(255, 255, 255, 0.40)', width: '100%', marginTop: '5px' }} />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyComponent;
