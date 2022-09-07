import { createSlice, createEntityAdapter, createSelector} from "@reduxjs/toolkit";

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
            basketAdater.removeOne(state, payload.id)
            state.basketResult-= payload.price
        }
    },
})

const {actions, reducer} = basketSlice;

export const {selectAll} = basketAdater.getSelectors(state => state.basket);

export default reducer;

export const getAllItemsId = createSelector(
    selectAll,
    (iphons) => {
        return iphons.map(({id}) => {
            return id
        })
    }
)

export const {
    basketAddItem,
    basketRemoveItem
} = actions;