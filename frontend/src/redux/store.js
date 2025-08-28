import { configureStore } from '@reduxjs/toolkit'
import orderStepsReducer from './features/order-step/orderStepsSlice'


const rootReducer = { 
  step: orderStepsReducer,
}
const initialState = {}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
})

export default store