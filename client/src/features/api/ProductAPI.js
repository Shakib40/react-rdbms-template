import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROUTES_PRODUCTS } from '../../helper/routes';

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BASE_URL;
const TOKEN = JSON.parse(sessionStorage.getItem('token'));
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
};

export const ProductAPI = createApi({
  reducerPath: 'ProductAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: () => ROUTES_PRODUCTS
    }),
    getProductsById: builder.query({
      query: (id) => `${ROUTES_PRODUCTS}/${id}`
    }),
    updateSingleProduct: builder.mutation({
      query: ({ id, userData }) => ({
        url: `${ROUTES_PRODUCTS}/${id}`,
        method: 'PUT',
        body: userData
      })
    }),
    deleteSingleProduct: builder.mutation({
      query: (id) => ({
        url: `${ROUTES_PRODUCTS}/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetProductsListQuery: GET_PRODUCT_LIST,
  useGetProductsByIdQuery: GET_PRODUCT_ID,
  useUpdateSingleProductMutation: UPDATE_PRODUCT_ID,
  useDeleteSingleProductMutation: DELETE_PRODUCT_ID
} = ProductAPI;
