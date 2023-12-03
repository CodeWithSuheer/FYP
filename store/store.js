import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './reducers/ProductSlice'
import authSlice from './reducers/authSlice'
import requests from './reducers/requests'

const store = configureStore({
  reducer: {
    products: ProductSlice,
    auth: authSlice,
    requests: requests,
  },
})

export default store
