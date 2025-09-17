import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BaseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    jsonContentType: 'application/json'
})
export const apiSlice = createApi({
    baseQuery: BaseQuery,
    endpoints: () => ({})
})