import CategoryItem from "@/Components/CategoryItems/CategoryItem";

const { Grid, Typography } = require("@mui/material")

const Category = () => {
    const Item = [
        {
            title: 'شیرین کننده ها',
            texts: [
                { text: 'دکستروز خشک' },
                { text: 'مالتو دکسترین' },
            ]
        }
    ]

    const textsArray = Item.map((item) => {
        const titleText = item.title;
        const textItems = item.texts.map((textItem) => textItem.text);
        return { titleText, textItems };
    });
    return (
        <>
            <Grid container style={{
                backgroundImage: `url('/bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h2" sx={{ color: '#3D3F61', fontWeight: 800, }}>دسته‌بندی کالا ها</Typography>
                    <Typography variant="h5" sx={{ color: '#3D3F61', fontWeight: 800, }}> بالاترین کیفیت مواد شیمی، مطرح‌ترین برند ها از سرتاسر جهان </Typography>
                </Grid>
                <CategoryItem titleText={textsArray[0].titleText} textsArray={textsArray[0].textItems} />
            </Grid>

        </>
    )
}
export default Category;