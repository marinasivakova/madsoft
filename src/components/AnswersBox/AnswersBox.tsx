import { useSelector } from "react-redux";
import getAnswers from "../../state/selectors/getAnswers";
import { Stack } from "@mui/material";
import { StackItem } from "../StackItem/StackItem";

export default function AnswersBox() {
  const answers = useSelector(getAnswers);
  return (
    <Stack spacing={1}>
      <StackItem>
        <h2>Ответы на вопросы</h2>
      </StackItem>
      {answers.map((answer) => {
        return (
          <StackItem key={answer.id}>
            {answer.id} - {answer.answer}
          </StackItem>
        );
      })}
    </Stack>
  );
}
