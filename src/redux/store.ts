import { configureStore } from '@reduxjs/toolkit'
import loginStatusSlice from './slices/loginStatus'
export const store = configureStore({
  reducer: {
    loginStatus: loginStatusSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch