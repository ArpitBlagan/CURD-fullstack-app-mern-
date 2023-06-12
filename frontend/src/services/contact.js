import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl="http://localhost:5001/api";
export const contactApi=createApi({
    reducerPath:"contact",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints(builder){
        return {
            getUsers:builder.query({
                query:(val)=>{
                    return {
                        url:'/user/current',
                        headers:{
                            'Authorization':`Bearer ${val}`,
                        }
                    }
                }
            }),
            getContacts:builder.query({
                query:(val)=>{
                    return{
                        url:'/contacts',
                        headers:{
                            'Authorization':`Bearer ${val}`,
                        }
                    }
                }
            }),
            delContact:builder.mutation({
                query:(val)=>{
                    return {
                        method:'DELETE',
                        url:`/contacts/${val.id}`,
                        headers:{
                            'Authorization':`Bearer ${val.token}`,
                        }
                    }
                }
            }),
            addContact:builder.mutation({
                query:(val)=>{
                    return {
                        method:'POST',
                        url:'/contacts',
                        body:val.body,
                        headers:{
                            'Authorization':`Bearer ${val.token}`,
                        }
                    }
                }
            }),
            updateContact:builder.mutation({
                query:(val)=>{
                    return {
                        method:"PUT",
                        url:`/contacts/${val.id}`,
                        body:val.body,
                        headers:{
                            'Authorization':`Bearer ${val.token}`,
                        }
                    }
                }
            })
        }
    }
});
export const {useGetUsersQuery,useGetContactsQuery,useDelContactMutation,useAddContactMutation,useUpdateContactMutation}=contactApi;