import {
	createSlice,
	createEntityAdapter,
	createSelector
} from '@reduxjs/toolkit';

const basketAdater = createEntityAdapter();

const initialState = basketAdater.getInitialState({
	basketResult: 0
});

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		basketAddItem: (state, { payload }) => {
			basketAdater.addOne(state, payload);
		},
		basketRemoveItem: (state, { payload }) => {
			basketAdater.removeOne(state, payload.id);
		},
		basketSetTotal: (state, { payload }) => {
			state.basketResult = payload;
		},
		basketUpdateItem: basketAdater.updateOne,
		basketReset: (state) => {
			state.basketResult = 0;
			basketAdater.removeAll(state);
		}
	}
});

const { actions, reducer } = basketSlice;

export const { selectAll } = basketAdater.getSelectors((state) => state.basket);

export default reducer;

export const getAllItemsId = createSelector(selectAll, (iphons) => {
	return iphons.map(({ id }) => {
		return id;
	});
});

export const calcAmount = createSelector(selectAll, (iphons) => {
	let sum = 0;
	iphons.forEach((el) => {
		sum += el.price * el.counter;
	});
	return sum;
});

export const {
	basketAddItem,
	basketRemoveItem,
	basketUpdateItem,
	basketSetTotal,
	basketReset
} = actions;
