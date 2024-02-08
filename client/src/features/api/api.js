import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createBaseApi = (baseUrl, headers) => {
  return createApi({
    baseQuery: fetchBaseQuery({ baseUrl, headers })
  });
};

export const createCrudEndpoints = (builder, resourcePath) => {
  return {
    getList: builder.query({
      query: () => resourcePath
    }),
    getById: builder.query({
      query: (id) => `${resourcePath}/${id}`
    }),
    update: builder.mutation({
      query: ({ id, data }) => ({
        url: `${resourcePath}/${id}`,
        method: 'PUT',
        body: data
      })
    }),
    remove: builder.mutation({
      query: (id) => ({
        url: `${resourcePath}/${id}`,
        method: 'DELETE'
      })
    })
  };
};
