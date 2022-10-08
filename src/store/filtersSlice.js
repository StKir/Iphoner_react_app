import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filterDisplay: 'По умолчанию',
	filterCoast: {
		ot: 0,
		do: 999999
	},
	filterMemory: 'none',
	filterColor: 'none'
};

const FilterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterChangeDisplay: (state, { payload }) => {
			state.filterDisplay = payload;
		},
		filterChangeCoast: (state, { payload }) => {
			state.filterCoast.ot = payload.ot;
			state.filterCoast.do = payload.do;
		},
		filterChangeMemory: (state, { payload }) => {
			state.filterMemory = payload;
		},
		filterChangeColor: (state, { payload }) => {
			state.filterColor = payload;
		},
		filterReset: (state) => {
			state.filterDisplay = 'По умолчанию';
			state.filterCoast.ot = 0;
			state.filterCoast.do = 999999;
			state.filterMemory = 'none';
			state.filterColor = 'none';
		}
	}
});

const { actions, reducer } = FilterSlice;

export default reducer;

export const {
	filterChangeDisplay,
	filterChangeCoast,
	filterChangeMemory,
	filterChangeColor,
	filterReset
} = actions;
