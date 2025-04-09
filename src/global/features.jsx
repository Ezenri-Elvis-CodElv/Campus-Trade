import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userInfo: {}
};

const features = createSlice({
    name: "CodElv",
    initialState,
    reducers: {
        isAuth: (state) => {
            state.isAuthenticated = true;
        },
        signOut: (state) => {
            state.isAuthenticated = false;
            state.userInfo = {};  // Fixed userData -> userInfo
        },
        UserData: (state, { payload }) => {
            state.userInfo = payload; 
        }
    }
});

export const { isAuth, signOut, UserData } = features.actions;
export default features.reducer;