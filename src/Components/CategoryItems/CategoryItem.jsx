import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const CategoryItem = ({ titleText, textsArray }) => {
    const [boxHeight, setBoxHeight] = useState("10%");

    useEffect(() => {
        // اگر مقدار count بیشتر از یک باشد، height را به تعداد ده درصد افزایش دهید
        if (textsArray.length > 1) {
            const newHeight = textsArray.length * 5 + "%";
            setBoxHeight(newHeight);
        }
    }, [textsArray]);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item>
                <Box sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    width: '334px',
                    height: boxHeight, // اعمال ارتفاع باکس بر اساس تعداد موارد در textsArray
                    borderRadius: '13px',
                    background: 'linear-gradient(to top, #BF9D61, #F6D88C)',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Box sx={{
                        backgroundColor: '#3D3F61',
                        borderRadius: '25px',
                        py: '20px',
                        px: '40px',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '225px',
                        zIndex: 20
                    }} >
                        <Typography sx={{
                            background: `linear-gradient(to top, #BF9D61, #F6D88C)`,
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontWeight: 800,
                            fontSize: '2rem',
                            textAlign: 'center',
                            marginBottom: '20px'
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
