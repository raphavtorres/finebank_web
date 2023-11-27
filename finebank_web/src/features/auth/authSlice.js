import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { user: null, access: null, refresh: null };

const authSlice = createSlice({
	name: "auth",
	initialState: initialStateValue,
	reducers: {
		setCredentials: (state, action) => {
			const { user, access, refresh } = action.payload;
			state.user = user;
			state.access = access;
			state.refresh = refresh;
		},

		logOut: (state) => {
			state.user = null;
			state.access = null;
			state.refresh = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentAccessToken = (state) => state.auth.access;
export const selectCurrentRefreshToken = (state) => state.auth.refresh;
