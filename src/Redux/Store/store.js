import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from '../Features/userSlice';
import adminSidebarToogle from '../Features/adminSidebarToogle';
import adminSlice from '../Features/adminSlice';
import teacherSlice from '../Features/teacherSlice';
import courseSlice from '../Features/courseSlice';
import communitySlice from '../Features/communitySlice';
import groupSlice from '../Features/groupSlice';



export default configureStore({
    reducer: {
        user: userSlice,
        adminSidebarToogle: adminSidebarToogle,
        admin:adminSlice,
        teacher:teacherSlice,
        course: courseSlice,
        community: communitySlice,
        group:groupSlice
    },
   
})