import type { SignInData, UserType } from "../utils/Types";
import { apiSlice } from "./apiSlice";

const UserAPI = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        GoogleSignIn: builder.mutation({

            query: (tokenId) => ({ 
                
                url: '/user/signIn', 
                method: 'POST', 
                body: { token: tokenId } })

        }),

        GoogleSignUp: builder.mutation({

            query: (tokenId) => ({ 

                url: '/user/signUp', 
                method: 'POST', 
                body: { token: tokenId } })

        }),

        SignIn: builder.mutation({

            query: (data: SignInData) => ({ 
                url: '/user/login', 
                method: 'POST', 
                body: data })
        }),

        SignUp: builder.mutation({

            query: (data: UserType) => ({ 
                url: '/user/registration', 
                method: 'POST', 
                body: data })

        })
    })
})

export const {

    useGoogleSignInMutation,
    useGoogleSignUpMutation,
    useSignInMutation,
    useSignUpMutation

} = UserAPI