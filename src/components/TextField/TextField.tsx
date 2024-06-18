import { FormControl, FormLabel, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function TextFieldComponent({
  q,
}: {
  q: { question: string; options: Array<string> | string };
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl
      sx={{ m: "24px 0", width: "100%", minWidth: "50%", maxWidth: "90%" }}
      component="fieldset"
      variant="standard"
    >
      <FormLabel sx={{marginBottom: "10px", fontFamily: "sans-serif"}} component="legend">{q.question}</FormLabel>
      <TextField
          autoComplete='off'
          multiline
          maxRows={10}
          {...register("input", { required: true })}
        />
      {errors.input && <span style={{color: "red"}}>Answer is required</span>}
    </FormControl>
  );
}
