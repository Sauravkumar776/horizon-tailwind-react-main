import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    company: ""
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addUsername: (state, action) => {
            console.log("this is the profileSlice addUsername")
            state.username = action.payload
        },
        addCompany: (state, action) => {
            state.company = action.payload
        }
    },
});

export const {addUsername, addCompany} = profileSlice.actions;
export default profileSlice.reducer;