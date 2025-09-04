import { configureStore } from '@reduxjs/toolkit'
import { listTableType, listTableMaterial } from './features/order/tableSlice'
import { listTalqType, listTalq } from './features/order/talqSlice'
import orderSlice from './features/order/orderSlice'

const rootReducer = {
  order: orderSlice.reducer,
  listTableType: listTableType.reducer,
  listTableMaterial: listTableMaterial.reducer,
  listTalqType: listTalqType.reducer,
  listTalq: listTalq.reducer,
}

const initialState = {}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
})

export default store