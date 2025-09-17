import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../utils/Types";

const initialState: UserType = {
    id: null,
    name: null,
    email: null,
    password: null,
    provider: null,
};

const UserSlice = createSlice({

    name: 'UserSlice',
    initialState: initialState,
    
    reducers: {
        Login: (state, { payload }: PayloadAction<UserType>) => {
            state.email = payload.email,
                state.password = payload.password,
                state.id = payload.id,
                state.provider = payload.provider
        },

        Logout: (state) => {
            state.email = null,
                state.password = null,
                state.id = null,
                state.provider = null
        }
    }
})

export const { Login, Logout } = UserSlice.actions

export default UserSlice.reducer