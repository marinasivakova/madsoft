import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { answer } from '../../../types/test'

export interface answerSlice {
  answers: Array<answer>
}

const initialState: answerSlice = {
  answers: [],
}

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    update: (state, payload: PayloadAction<answer>) => {
      state.answers = [...state.answers, payload.payload]
    },
  },
})

export const { update } = answersSlice.actions

export default answersSlice.reducer