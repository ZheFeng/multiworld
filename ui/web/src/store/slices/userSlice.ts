import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Parse from "parse";

export interface UserState {
  authed: boolean,
}

const initialState: UserState = {
  authed: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
        state.authed = true;
    },
    logout: (state) => {
        state.authed = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer