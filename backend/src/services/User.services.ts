import { Request, Response } from "express";
import { Users } from "../db/models/Users";

export async function oAuthSignInService(payload: any) {

    const { email } = payload
    try {

        return await Users.findOne({

            email: email,

        })


    } catch (error) {
        throw error
    }
}

export async function oAuthSignUpService(payload: any) {

    const { email, given_name, family_name, picture } = payload

    try {
        return Users.create({

            email: email,
            password: "",
            firstName: given_name,
            lastName: family_name,
            picture: picture,
            providerId: process.env.GOOGLE_CLIENT_ID,
            provider: 'google'

        })
    } catch (error) {

        throw error

    }
}

export async function SignUpService(data: any) {

    const { email, password, name } = data

    try {
        return await Users.create({
            email: email,
            password: password,
            name: name,
            provider: '',
            providerId: '',
        })
    } catch (error) {
        throw error
    }

}