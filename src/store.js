import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import authReducer from './slices/authSlice'

export default configureStore({
  reducer: {
    poststore: postsReducer,
    authstore: authReducer
  }
})