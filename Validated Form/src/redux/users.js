import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;

/*import { createApi } from '@reduxjs/toolkit/query'
import axios from 'axios'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }

const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'http://example.com',
  }),
  endpoints(build) {
    return {
      query: build.query({ query: () => ({ url: '/query', method: 'get' }) }),
      mutation: build.mutation({
        query: () => ({ url: '/mutation', method: 'post' }),
      }),
    }
    
  },
})
export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;


 const usersApi= axiosBaseQuery (
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({}) => {
    
 const {username, email, checkbox, select, comments } = useSelector((state) => state.fetch.username)
 const data ={username, email, checkbox, select, comments }
    try {
      const result = await axios.post(baseUrl,{ data })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: { status: err.response?.status, data: err.response?.data },
      }
    }
  }
)

export const { axiosBaseQuery } = usersApi;
https://github.com/raulterhesdev/redux-toolkit-crud-todolist
*/