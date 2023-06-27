import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
// import eachquestion from "./eachquestion";
import { CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// import {CardContent} from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { makeStyles } from "@mui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     // Common styles for all screen sizes
//   },
//   [theme.breakpoints.up("sm")]: {
//     card: {
//       // Styles for screens that are small (`sm`) and above
//       width: "1px",
//     },
//   },
//   [theme.breakpoints.up("md")]: {
//     card: {
//       // Styles for screens that are medium (`md`) and above
//     },
//   },
// }));
const Eachquestion = () => {
  // const styclass = useStyles();
  const [open, setopen] = useState(true);
  const { quesarr } = useSelector((store) => store.quest);
  // let count=0;
  const { count, setcount } = useState(0);
  //   const []
  const url = [
    "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283",
    "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=1380&t=st=1687869674~exp=1687870274~hmac=ea98694309747927be42b47d1de11eb67c418e573ea1d1baa633b7688c1f35d8",
  ];
  {
    // console.log(url[0]);
  }
  return (
    <div className="questions-card">
      {quesarr.map((item, index) => (
        // console.log
        <>
          <Card
            className="card-holder"
            style={{
              width: "15vw",
              // min
              margin: "auto",
              padding: "10px",
              display: "flex",
            }}
            sx={{ minWidth: "260px" }}
          >
            <CardMedia
              sx={{
                maxWidth: "100%",
                marginInline: "auto",
                // background
              }}
              component="img"
              alt="green iguana"
              maxWidth="200px"
              height="160"
              image={url[index % 2]}
            />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.que}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a
                  href={item.link}
                  style={{ fontSize: "1.2rem" }}
                  target="_blank"
                >
                  Question link
                </a>
              </Typography>
              {open ? (
                <Button
                  style={{ marginBlock: ".5rem" }}
                  onClick={() => {
                    setopen(false);
                  }}
                  size="small"
                >
                  Show Notes
                </Button>
              ) : (
                <p>{item.notes}</p>
              )}
            </CardContent>
            <CardActions>
              <Button size="small">Solved</Button>
              <Button size="small">Mark for revision</Button>
              <Button size="small">Remove</Button>
            </CardActions>
          </Card>
        </>
      ))}
    </div>
  );
};

export default Eachquestion;
