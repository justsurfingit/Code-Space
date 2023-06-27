import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quesarr: [],
  solved: 0,
  unsolved: 0,
  total: 0,
};
const questions = createSlice({
  name: "quesbank",
  //this name is used to acces it by the ui
  initialState,
  reducers: {
    addquestion: (state, { payload }) => {
      // console.log(payload)
      state.quesarr = [...state.quesarr, payload];
      console.log(state.quesarr);
      state.total += 1;
      state.unsolved += 1;
    },
    removequestion: (state, { payload }) => {
      //this is
      state.quesarr = state.quesarr.filter((q) => q.id != payload.id);
      state.total -= 1;
      state.solved -= 1;
    },
  },
});
export const { addquestion, removequestion } = questions.actions;
export default questions.reducer;
