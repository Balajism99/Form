import { useSelector } from 'react-redux';
import {
    createAsyncThunk,
  } from '@reduxjs/toolkit'


export const patchComment = createAsyncThunk(
    
    
    async ({}) => {
      const {username, email, checkbox, select, comments } = useSelector((state) => state.fetch.username)
      const data ={username, email, checkbox, select, comments }
      await fetch(`http://localhost:9000/createUser`, {
        method: 'POST',
        body: JSON.stringify(data),
      })
      return { data }

    },

  )


  /*

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
  }
};



  */