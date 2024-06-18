import { useDispatch, useSelector } from "react-redux";
import { test } from "../../server/mockTest";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { update } from "../../state/reducers/answers/answers";
import Input from "../Input/Input";
import CheckboxesGroup from "../CheckboxGroup/CheckBoxGroup";
import TextFieldComponent from "../TextField/TextField";
import RadioGroupComponent from "../RadioGroup/RadioGroup";
import { useRef } from "react";
import { remove } from "../../state/reducers/questions/questions";
import { RootState } from "../../state/store";
import { Box, Button, Chip } from "@mui/material";

type Inputs = {
  input: Array<string>;
};

export default function QuestionCard() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );
  const ref = useRef(test.length);
  const methods = useForm<Inputs>();

  const q = questions[0];
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(update({ id: q.id, answer: data.input }));
    dispatch(remove());
  };

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: "fillAvailable"
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {q.task.type === "radio" ? (
          <RadioGroupComponent q={q.task} />
        ) : q.task.type === "checkbox" ? (
          <CheckboxesGroup q={q.task} />
        ) : q.task.type === "textfield" ? (
          <TextFieldComponent q={q.task} />
        ) : (
          <Input q={q.task} />
        )}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "spaceBetween",
          }}
        >
          <Button sx={{ width: "150px" }} variant="outlined" type="submit">
            Отправить
          </Button>
          <Chip
            color="primary"
            variant="outlined"
            label={`${ref.current - questions.length}/${ref.current}`}
          />
        </Box>
      </form>
    </FormProvider>
  );
}
