import { Request, Response } from "express";
import { Users } from "../db/models/Users";

export async function SignInService(payload: any) {

    const { email, password } = payload
    try {

        return await Users.findOne({

            email: email,
            password: password

        })

    } catch (error) {
        throw error
    }
}