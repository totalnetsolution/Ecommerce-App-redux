import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 100 },
    { id: 3, name: 'Product 3', price: 150 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.products.products;
export default productsSlice.reducer;
