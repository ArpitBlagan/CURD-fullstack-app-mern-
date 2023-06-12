import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { logIn, useUserLoginMutation } from './login';
import { contactApi,useGetUsersQuery } from './contact';
import { stateSlice } from './stateSlice';
const store=configureStore({
    reducer:{
        [logIn.reducerPath]:logIn.reducer,
        [contactApi.reducerPath]:contactApi.reducer,
        "state":stateSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([logIn.middleware,contactApi.middleware]),
});
setupListeners(store.dispatch);
export default store