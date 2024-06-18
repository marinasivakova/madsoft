import { RootState } from "../store"

export default function findTimerStatus(state:RootState) {
  return state.timer.status
}
