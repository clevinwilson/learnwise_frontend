import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: "",
    email:"",
    firstName:"",
    lastName:"",
    login: "",
    token: ""
}
const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeacherDetails: (state, action) => {
            state.id = action.payload.id;
            state.email=action.payload.email;
            state.firstName=action.payload.firstName;
            state.lastName=action.payload.lastName;
            state.picture = action.payload.picture;
            state.about = action.payload.about;
            state.login = action.payload.login;
            state.accountSetup = action.payload.accountSetup;
            state.token = action.payload.token;
        },
        setTeacherSignoutState: (state, action) => {
            state.id = null;
            state.email=null;
            state.firstName=null;
            state.lastName=null;
            state.login = null;
            state.token = null;
        }
    }
})

export const { setTeacherSignoutState, setTeacherDetails } = teacherSlice.actions;

export default teacherSlice.reducer;