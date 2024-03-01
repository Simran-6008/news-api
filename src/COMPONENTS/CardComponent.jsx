import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent =({listNews}) =>{
    return(
        <>
         <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={listNews.urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {listNews.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {listNews.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {listNews.publishedAt}
                </Typography>
              </CardContent>
            </Card>
        </>
    )
}

export default CardComponent