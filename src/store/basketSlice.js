import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const basketAdater = createEntityAdapter();

const initialState = basketAdater.getInitialState({
    basketResult: 0
})

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        basketAddItem: (state, {payload}) => {
            basketAdater.addOne(state, payload)
            state.basketResult+= payload.price
        },
        basketRemoveItem: (state, {payload}) => {
            basketAdater.removeOne(state, payload)
            state.basketResult-= payload.price
        }
    },
})

const {actions, reducer} = basketSlice;

export const {selectAll, selectEntities} = basketAdater.getSelectors(state => state.basket);

export default reducer;

export const {
    basketAddItem,
    basketRemoveItem
} = actions;