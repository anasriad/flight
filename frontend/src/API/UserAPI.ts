import { apiSlice } from "./apiSlice";

export const UserAPI = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
       GoogleSignIn: builder.mutation({
        query:(tokenId:string)=>({url:'user/signIn', method:'POST'})
       })
    })
})