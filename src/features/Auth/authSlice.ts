import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveCredential: (state, payload: PayloadAction) => {
      state.token = '';
    },
  },
});

export const {saveCredential} = authSlice.actions;
export default authSlice.reducer;
