import { createSlice } from "@reduxjs/toolkit";
import { question } from "../../../types/test";
import { test } from "../../../server/mockTest";

export interface QuestionsSlice {
  questions: Array<question>;
}

const initialState: QuestionsSlice = {
  questions: test,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    remove: (state) => {
      state.questions.shift();
    },
  },
});

export const { remove } = questionsSlice.actions;

export default questionsSlice.reducer;
