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
const Eachquestion = () => {
  const [open, setopen] = useState(true);
  const { quesarr } = useSelector((store) => store.quest);
  //   const []
  const url =
    "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283";
  return (
    <div className="questions-card">
      {quesarr.map((item) => (
        // console.log
        <>
          <Card
            className="card-holder"
            style={{
              width: "400px",
              margin: "auto",
              padding: "10px",
              display: "flex",
            }}
            sx={{ minWidth: "30vw" }}
          >
            <CardMedia sx={{ height: 200 }} image={url} title="green iguana" />
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.que}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a href={item.link} target="_blank">
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
