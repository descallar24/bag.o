import { configureStore } from '@reduxjs/toolkit'
//import authReducer from '../screens/Authentication/authSlice'
import deviceReducer from '../screen/components/deviceSlice'

export default configureStore({
  reducer: {
    devices: deviceReducer
  },
})