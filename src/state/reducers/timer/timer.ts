import { createSlice } from '@reduxjs/toolkit'
import { timer } from '../../../types/timer'

export interface TimerSlice {
  value: timer,
  deadline: timer,
  status: boolean
}

const initialState: TimerSlice = {
  value: {h: 0, m: 0, s: 0},
  status: false,
  deadline: {h: 0, m: 20, s: 0},
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.status = true;
    },
    removeSec: (state)=> {
      if (state.deadline.s) {
        state.deadline.s = state.deadline.s - 1
      } else if (state.deadline.m) {
        state.deadline.m = state.deadline.m - 1
        state.deadline.s = 59
      } else if (state.deadline.h) {
        state.deadline.h = state.deadline.h - 1
        state.deadline.m = 59
        state.deadline.s = 59
      }
    }
  },
})

export const { start, removeSec } = timerSlice.actions
export default timerSlice.reducer