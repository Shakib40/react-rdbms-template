import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    currentUser: null,
    productDetails: null
  },
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setProductDetails(state, action) {
      state.productDetails = action.payload;
    },
    setUpdateProduct(state, action) {
      const { id, userData } = action.payload;
      const userIndex = state.productList.findIndex(user => user.id === id);
      if (userIndex !== -1) {
        state.productList[userIndex] = userData;
      }
    },
    setRemoveSingleProduct(state, action) {
      const id = action.payload;
      state.productList = state.productList.filter(user => user.id !== id);
    },
    setDeleteProductList(state) {
      state.productList = [];
    }
  }
});

export const { 
  setProductList, 
  setProductDetails, 
  setUpdateProduct, 
  setRemoveSingleProduct, 
  setDeleteProductList 
} = ProductSlice.actions;
export default ProductSlice.reducer;
