import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    tableType: null,
    tableMaterial: null,
    talqType: null,
    talqThickness: 0,
    shape: null,
    talqLength: 0,
    talqWidth: 0,
  },
  reducers: {
    addTableType(state, action) {
      state.tableType = action.payload
    },
    addTableMaterial(state, action) {
      state.tableMaterial = action.payload
    },
    addTalqType(state, action) {
      state.talqType = action.payload
    },
    addThickness(state, action) {
      state.talqThickness = action.payload
    },
    addShape(state, action) {
      state.shape = action.payload
    },
    addLength(state, action) {
      state.talqLength = action.payload
    },
    addWidth(state, action) {
      state.talqWidth = action.payload
    },
  }
})

export const { addTableType, addTableMaterial, addTalqType, addThickness, addShape, addLength, addWidth, addCut } = orderSlice.actions
export default orderSlice