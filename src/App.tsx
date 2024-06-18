import { useDispatch, useSelector } from "react-redux";
import findTimerStatus from "./state/selectors/findTimerStatus";
import TestApp from "./pages/TestApp/TestApp";
import { start } from "./state/reducers/timer/timer";
import Final from "./pages/Final/Final";
import { Box, Button } from "@mui/material";
import findTimerDeadline from "./state/selectors/findTimerDeadline";
import { timer } from "./types/timer";
import getQuestions from "./state/selectors/getQuestions";

function App() {
  const status: boolean = useSelector(findTimerStatus);
  const questions = useSelector(getQuestions);
  const time: timer = useSelector(findTimerDeadline);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(start());
  };
  if (!questions.length || (!time.h && !time.m && !time.s)) {
    return <Final />;
  }
  return status ? (
    <TestApp />
  ) : (
    <Box
      style={{
        height: "100vh",
        margin: "auto",
        padding: "20px",
        width: "fitContent",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif"
      }}
    >
      <Button variant="contained" onClick={handleClick}>
        Начать тестирование
      </Button>
    </Box>
  );
}

export default App;
