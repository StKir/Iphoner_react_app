import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

const iphonsAdater = createEntityAdapter();

const initialState = iphonsAdater.getInitialState({
    iphonsLoadingStatus: 'idle'
})

export const fetchIphons = createAsyncThunk(
    'iphons/fetchIphons',
    async (modelIphon) => {
       return await axios.get('http://localhost:3001/stock')
                    .then(data => data.data.filter(({model}) => 
                    modelIphon === model
                ))      
    }
);

const iphonsSlice = createSlice({
    name: 'iphons',
    initialState,
    reducers: null,
    extraReducers: (builder) => {
        builder
            .addCase(fetchIphons.pending, state => {state.iphonsLoadingStatus = 'loading'})
            .addCase(fetchIphons.fulfilled, (state, {payload}) => {
                state.iphonsLoadingStatus = 'idle';
                iphonsAdater.setAll(state, payload);
            })
            .addCase(fetchIphons.rejected, state => {
                state.iphonsLoadingStatus = 'error';
            })
    }
})

const {actions, reducer} = iphonsSlice;

export const {selectAll} = iphonsAdater.getSelectors(state => state.iphons);

export default reducer;

export const filteredIphoneSelector = createSelector(
    selectAll,
    (state) => state.filters,
    (iphons, filter) => {
        if(filter.filterDisplay === 'По умолчанию') {
            return iphons
        };
        if(filter.filterDisplay === 'Цены: по возрастанию') {
            const newArray = JSON.parse(JSON.stringify(iphons))
            return newArray.sort((a,b) => 
                 parseFloat(a.price) - parseFloat(b.price)
            )
        };
        if(filter.filterDisplay === 'Цены: по убыванию') {
            const newArray = JSON.parse(JSON.stringify(iphons))
            return newArray.sort((a,b) => 
                 parseFloat(b.price) - parseFloat(a.price)
            )
        };
    }
);

// export const {
//     heroesFetching,
//     heroesFetched,
//     heroesFetchingError,
// } = actions;