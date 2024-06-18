import { Box } from "@mui/material";
import Timer from "../../components/Timer/Timer";
import AnswersBox from "../../components/AnswersBox/AnswersBox";

export default function Final() {
  return (
    <Box
      style={{
        margin: "auto",
        padding: "20px",
        width: "fitContent",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "10px",
      }}
    >
      <h1>Тестирование отправлено!</h1>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <h2 style={{ display: "inline-flex" }}>Финальное время: </h2>
        <Timer />
      </Box>
      <AnswersBox />
    </Box>
  );
}
