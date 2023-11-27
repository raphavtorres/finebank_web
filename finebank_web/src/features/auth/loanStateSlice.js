import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { returned: null };

const loanStateSlice = createSlice({
	name: "loanState",
	initialState: initialStateValue,
	reducers: {
		setLoanState: (state, action) => {
			const { returned } = action.payload;
			state.returned = returned;
		},
	},
});

export const { setLoanState } = loanStateSlice.actions;

export default loanStateSlice.reducer;

export const selectCurrentLoanState = (state) => state.auth.user;
