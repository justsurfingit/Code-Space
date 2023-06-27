import React from "react";
// import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Questioncard = () => {
  // const url =
  //   "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283";
  return (
  //   <div class="ques-custom">
  //     <div className="upper">
  //       <img src={url} alt="" />
  //       <h2>title</h2>
  //       <a href=""></a>
  //     </div>
  //     <div className="lower">
  //       <Button size="small">Solved</Button>
  //       <Button size="small">Mark for revision</Button>
  //       <Button size="small">Remove</Button>
  //     </div>
  //   </div>
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Questioncard;
