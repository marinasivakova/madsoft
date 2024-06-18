import { useEffect } from "react";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Timer from "../../components/Timer/Timer";
import { removeSec } from "../../state/reducers/timer/timer";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

export default function TestApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(removeSec());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <div>
      <Box
        sx={{
          padding: "20px",
          width: "fitContent",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flexStart",
          fontFamily: "sans-serif"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h1 style={{ display: "inline-flex", margin: "0" }}>Тестирование</h1>
          <Timer />
        </Box>
        <QuestionCard />
      </Box>
    </div>
  );
}
