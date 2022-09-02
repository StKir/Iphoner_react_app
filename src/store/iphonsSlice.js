import { createSlice, createAsyncThunk, createEntityAdapter, createSelector} from "@reduxjs/toolkit";
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
        return iphons.filter(({color, price, memory}) => 
            (color.name === filter.filterColor || filter.filterColor === 'none') &&
            ((filter.filterCoast.ot < price) && (filter.filterCoast.do > price)) &&
            (filter.filterMemory === memory || filter.filterMemory === 'none')
        )
    }
);

// export const {
//     
// } = actions;