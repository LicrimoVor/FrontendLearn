import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
};

/** Слайс (он же редюсер) для логина */
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, actions: PayloadAction<string>) => {
            state.username = actions.payload;
        },
        setPassword: (state, actions: PayloadAction<string>) => {
            state.password = actions.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, actions) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
