import { configureStore } from "@reduxjs/toolkit";
import questions from "./slices/questions";
export  const store = configureStore({
    reducer:{
        //this section is for the reducers
        // jo bhe kaam kr rhe hai
        quest: questions,

        //ques he use krege hm ab
    },
});