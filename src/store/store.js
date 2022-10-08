import { configureStore } from '@reduxjs/toolkit';
import iphons from './iphonsSlice';
import filters from './filtersSlice';
import basket from './basketSlice';

const store = configureStore({
	reducer: { iphons, filters, basket },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Redux-thunk встроен в стандартные мидлвееры!
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
