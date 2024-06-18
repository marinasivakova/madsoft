import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useFormContext } from "react-hook-form";

export default function RadioGroupComponent({
  q,
}: {
  q: { question: string; options: Array<string>};
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <FormControl sx={{ m: "24px 0", width: "100%", minWidth: "50%", maxWidth: "90%" }}>
      <FormLabel sx={{marginBottom: "10px", fontFamily: "sans-serif"}} id="radio-buttons-group-label">{q.question}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue={q.options[0]}
        name="radio-buttons-group"
        style={{width: "fitContent"}}
      >
        {q.options.map((option) => {
          return (
            <FormControlLabel
            {...register("input", { required: true })}
              value={option}
              control={<Radio />}
              label={option}
              key={option}
            />
          );
        })}
      </RadioGroup>
      {errors.input && <span>Answer is required</span>}
    </FormControl>
  );
}
