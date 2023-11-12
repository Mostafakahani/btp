import { Grid } from "@mui/material";

const New = () => {
    return (
        <>
            <Grid
                container
                sx={{
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:before": {
                        content: '""',
                        width: "20px",
                        height: "20px",
                        top: "-50px",
                        background: "#9643db",
                        zIndex: "-2",

                    },
                    "&:after": {
                        content: '""',
                        background: "linear-gradient(0deg, #BF9D61 -73.47%, #F6D88C 99.26%)",
                        position: "absolute",
                        right: 0,
                        top: 0,
                        // height: "100%",
                        // width: "100%",
                        display: 'block',
                        right: 0,
                        left: 0,
                        position: 'absolute',
                        m: '0 auto',
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Grid
                    container
                    sx={{
                        mt: "45px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    س
                </Grid>
            </Grid>
        </>
    );
};

export default New;
