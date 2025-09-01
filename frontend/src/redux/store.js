import { configureStore } from '@reduxjs/toolkit'
import { listTableType, listTableMaterial } from './features/order/tableSlice'
import orderSlice from './features/order/orderSlice'

const rootReducer = {
  order: orderSlice.reducer,
  listTableType: listTableType.reducer,
  listTableMaterial: listTableMaterial.reducer,
}

const initialState = {}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
})

export default store