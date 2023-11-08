import { Box, Grid, Typography } from "@mui/material";

const CategoryItem = ({ titleText, textsArray }) => {
    return (
        <Grid container>
            <Grid item>
                <Box sx={{
                    position: 'relative',
                    textAlign: 'center',
                    width: '330px',
                    height: '120px', // تنظیم ارتفاع مطلوب برای ایتم‌ها
                    borderRadius: '13px',
                    background: 'linear-gradient(to top, #BF9D61, #F6D88C)',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <Box sx={{
                        backgroundColor: '#3D3F61',
                        borderRadius: '25px',
                        py: '20px',
                        px: '40px',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '225px',
                        zIndex: 20,
                        top: '-30%'
                    }} >
                        <Typography sx={{
                            background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 800,
                            fontSize: '2rem',
                            textAlign: 'center',
                            marginBottom: '20px' // فاصله‌ای بین عنوان و محتوا
                        }}>
                            {titleText}
                        </Typography>
                        <Box sx={{ my: '5px', position: 'relative' }}>
                            {textsArray.map((data, index) => (
                                <Box key={index} sx={{ color: '#fff', marginBottom: '10px' }}>
                                    <Typography>{data}</Typography>
                                    <hr style={{ border: '1px dashed rgba(255, 255, 255, 0.40)', width: '100%', marginTop: '5px' }} />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default CategoryItem;
