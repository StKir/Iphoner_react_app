import { configureStore } from '@reduxjs/toolkit';
import iphons from './iphonsSlice';

const store = configureStore({ //Конфигурирует стор с тулкитом, это удобнее чем без него и все!
    reducer: {iphons}, 
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;