import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    tableType: null,
    tableMaterial: null,
    talq: null,
    talqLength: 0,
    cut: null,
  },
  reducers: {
    addTableType(state, action) {
      state.tableType = action.payload
    },
    addTableMaterial(state, action) {
      state.tableMaterial = action.payload
    },
    addTalq(state, action) {
      state.talq = action.payload
    },
    addLength(state, action) {
      state.talqLength = action.payload
    },
    addCut(state, action) {
      state.cut = action.payload
    },
  }
})

export const { addTableType, addTableMaterial, addTalq, addLength, addCut } = orderSlice.actions
export default orderSlice