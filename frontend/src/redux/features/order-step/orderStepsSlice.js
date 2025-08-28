import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 1 }


const orderStepsSlice = createSlice({
  name: 'order-steps',
  initialState,
  reducers: {
    next: (state) => {
      if (state.value < 6) state.value++
    },
    previous: (state) => {
      if (state.value > 1) state.value--
    }
  }
})

export const { next, previous, step } = orderStepsSlice.actions;
export default orderStepsSlice.reducer