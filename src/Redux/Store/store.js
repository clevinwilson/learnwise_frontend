import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../Features/userSlice';
import adminSidebarToogle from '../Features/adminSidebarToogle';


export default configureStore({
    reducer: {
        user: userReducer,
        adminSidebarToogle: adminSidebarToogle
    },
   
})