
import { configureStore } from '@reduxjs/toolkit'
import { birdsSlice } from './slices/BirdSlice'

export const store = configureStore({
    reducer: {
        birds: birdsSlice.reducer,
    },
  })