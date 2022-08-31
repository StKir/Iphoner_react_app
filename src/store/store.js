import { configureStore } from '@reduxjs/toolkit';
import iphons from './iphonsSlice';
import filters from './filtersSlice'

const store = configureStore({ //Конфигурирует стор с тулкитом, это удобнее чем без него и все!
    reducer: {iphons, filters}, 
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;