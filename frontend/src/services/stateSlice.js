import { createSlice } from "@reduxjs/toolkit";
export const stateSlice=createSlice({
    name:"state",
    initialState:{
        id:"",
        name:"",
        email:"",
        phone:""
    },reducers:{
        change(state,action){
            state.id=action.payload.id;
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.phone=action.payload.phone;
        }
    }
});
export const {change}=stateSlice.actions;