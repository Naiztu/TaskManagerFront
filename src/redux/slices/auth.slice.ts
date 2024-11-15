import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../utilities/localStorage.utility";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserType } from "../../types/user.type";

export type IAuthState = {
  user: UserType | null;
  accessToken: string | null;
};

export const authKey = "auth";

const storedAuth =
  localStorage.getItem(authKey) || sessionStorage.getItem(authKey);

const initialState: IAuthState = storedAuth
  ? JSON.parse(storedAuth)
  : {
      user: null,
      accessToken: null,
    };

/* This code block is creating a slice of the Redux state for handling authentication-related actions.
Here's a breakdown of what each part is doing: */
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAccessToken: (
      state,
      action: PayloadAction<IAuthState["accessToken"]>
    ) => {
      const accessToken = action.payload;
      persistLocalStorage(authKey, { ...state, accessToken });
      state.accessToken = accessToken;
    },
    setUser: (state, action: PayloadAction<IAuthState["user"]>) => {
      clearLocalStorage(authKey);
      const user = action.payload;
      persistLocalStorage(authKey, { ...initialState, user });
      state.user = user;
    },
    logout: (state) => {
      clearLocalStorage(authKey);
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { logout, setUser, setAccessToken } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToken = (state: RootState): string | null =>
  state.auth.accessToken;

export default authSlice.reducer;
