// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import PRODUCT_REDUCER from './slice/ProductSlice';
import { ProductAPI } from './api/ProductAPI';

const store = configureStore({
  reducer: {
    products: PRODUCT_REDUCER,
    [ProductAPI.reducerPath]: ProductAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductAPI.middleware)
});

setupListeners(store.dispatch);

export default store;
