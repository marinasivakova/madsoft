import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useFormContext } from 'react-hook-form';

export default function CheckboxesGroup({
  q,
}: {
  q: { question: string; options: Array<string>};
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
      <FormControl sx={{ m: "24px 0", width: "100%", minWidth: "50%", maxWidth: "90%" }} component="fieldset" variant="standard">
        <FormLabel sx={{marginBottom: "10px", fontFamily: "sans-serif"}} component="legend">{q.question}</FormLabel>
        <FormGroup>
          {q.options.map((option)=>{
            return <FormControlLabel
            control={
              <Checkbox {...register("input", { required: true })} name={option}/>
            }
            label={option}
            key={option}
          />
          })}
        </FormGroup>
        {errors.input && <span>Answer is required</span>}
      </FormControl>
  );
}