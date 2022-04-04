import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersApi } from "./users";
import fetchReducer from './formfetch'



export const store = configureStore({
    reducer: {

       fetch : fetchReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),

    

});

setupListeners(store.dispatch);


/*import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
[api.reducerPath]: api.reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

const initialState={

}
const reducer= combineReducers({
        fetch: fetchReducer,
})
setupListeners(store.dispatch);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;*/