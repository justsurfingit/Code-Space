import React, { useState } from "react";
// import * as React from 'react';
import Card from "@mui/material/Card";
import Eachquestion from "./Eachquestion";
import { CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// import {CardContent} from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
// import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { addquestion } from "../store/slices/questions";
const QuesBank = () => {
  const { quesarr, total, solved, unsolved } = useSelector(
    (store) => store.quest
  );
  const [que, setque] = useState("");
  const [link, setlink] = useState("");
  const [notes, setnotes] = useState("");
  const dispatch = useDispatch();
  // dispatch ke help se we can directly call the function
  return (
    <div>
      <nav>
        <h1 className="main-head">Add your favourite question here</h1>
      </nav>
      <h2 className="sub-head">
        Hardwork beats talent when talent doesn't work hard
      </h2>
      <div className="add-section">
        {/* //esko dalege hm question vale section m new value dal k */}
        <form>
          {/* in */}
          <Box
            sx={{
              width: 700,
              maxWidth: "80%",
              // color: 'red',
              // border: '2px solid grey'
            }}
            className="input-handle"
          >
            <TextField
              label="Question title"
              value={que}
              margin="small"
              inputProps={{ style: { fontSize: "1.3rem" } }}
              InputLabelProps={{ style: { fontSize: "1rem" } }}
              className="in-que"
              variant="filled"
              color="success"
              onChange={(e) => {
                setque(e.target.value);
                // console.log(que);
              }}
              focused
            />
            <TextField
              inputProps={{ style: { fontSize: "1.2rem" } }}
              InputLabelProps={{ style: { fontSize: "1rem" } }}
              //   size="normal"
              onChange={(e) => {
                setlink(e.target.value);
                // console.log(que);
              }}
              value={link}
              margin="normal"
              className="in-que"
              label="Question Link"
              variant="standard"
              color="warning"
              focused
            />
            {/* this section is for the desctiption or notes */}
            <TextField
              margin="normal"
              inputProps={{ style: { fontSize: "1.3rem" } }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              id="standard-multiline-flexible"
              className="notes"
              value={notes}
              label="Notes"
              multiline
              onChange={(e) => {
                setnotes(e.target.value);
                // console.log(que);
              }}
              maxRows={4}
              variant="standard"
            />
            {/* at last we have button here */}
            <Button
            
              onClick={() => {
                //we have to handle click here
              }}
              variant="contained"
              style={{ width: "50%", marginInline: "auto" ,marginBlock:"1.4rem"}}
              color="success"
              onClick={(e) => {
                if (que === "" || link == "" || notes == "") return;

                dispatch(addquestion({ que, link, notes }));
                setlink("");
                setnotes("");
                setque("");
              }}
            >
              ADD QUEStION
            </Button>
          </Box>
        </form>
        {/* / */}
      </div>
      <div className="container">
        <Eachquestion />
      </div>
    </div>
  );
};

export default QuesBank;
