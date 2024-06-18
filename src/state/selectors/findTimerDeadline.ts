import { RootState } from "../store"

export default function findTimerDeadline(state:RootState) {
  return state.timer.deadline
}