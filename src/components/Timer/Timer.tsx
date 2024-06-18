import { useSelector } from "react-redux";
import findTimerDeadline from "../../state/selectors/findTimerDeadline";
import { Chip } from "@mui/material";

export default function Timer() {
  const timer = useSelector(findTimerDeadline);
  const hTag = timer.h ? `${timer.h}: ` : "";
  const mTag = timer.m ? `${timer.m}: ` : "0: ";
  const sTag = timer.s ? `${timer.s}` : "00";
  const tagContent = hTag + mTag + sTag;
  return <Chip style={{display:"inline-flex"}} label={tagContent} color="primary" variant="outlined" />;
}
