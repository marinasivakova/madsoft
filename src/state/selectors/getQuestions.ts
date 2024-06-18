import { RootState } from "../store";

export default function getQuestions(state: RootState) {
  return state.questions.questions;
}
