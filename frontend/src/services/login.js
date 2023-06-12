import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl='http://localhost:5001/api/user'
export const logIn=createApi({
    reducerPath:"register",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints(builder){
        return {
            userRegister:builder.mutation({
                query:(body)=>{
                    return {
                        url:'/register',
                        method:'POST',
                        body:body
                    }
                }
            }),
            userLogin:builder.mutation({
                query:(body)=>{
                    return {
                        url:'/login',
                        method:'POST',
                        body:body
                    }
                }
            }),
            getUsers:builder.query({
                query:()=>{ 
                    return {
                        url:'/'
                    }
                }
            })
        }
    },
});
export const {useUserRegisterMutation,useUserLoginMutation,useGetUsersQuery}=logIn;