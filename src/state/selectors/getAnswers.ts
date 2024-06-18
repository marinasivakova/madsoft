import { RootState } from "../store";

export default function getAnswers(state: RootState) {
  return state.answers.answers;
}