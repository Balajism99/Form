import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  username: '',
  email: '',
  location: '',
  checkbox:'',
  select: '',
  comments: ''
}
  export const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
      fetch: (state, action, payload) => {
       console.log(fetch)
       console.log(action)
       state.username=action.payload
      },
     
    },
  })
 

  export const { fetch} = fetchSlice.actions

export default fetchSlice.reducer