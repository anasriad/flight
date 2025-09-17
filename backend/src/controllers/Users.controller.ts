import { Request, Response } from "express";
import { oAuthSignInService, oAuthSignUpService, SignUpService } from "../services/User.services";
import { generateToken } from "../utils/jwt";

export async function oAuthSignInController(req: Request, res: Response) {

    try {

        const User = await oAuthSignInService((req as any).googlePayload)

        if (!User) res.status(404).send('Not Found')

        res.cookie('sessionToken', generateToken(User?.id), {
            httpOnly: true,
            sameSite: 'strict'
        })

        res.status(200).json({

            id: User?.id,
            firstName: User?.firstName,
            lastName: User?.lastName,
            picture: User?.picture,
            email: User?.email,
            provider: User?.provider,
            password: ''

        });



    } catch (error) {

        res.status(500).send(error)

    }

}

export async function oAuthSignUpController(req: Request, res: Response) {



    try {
        const User = await oAuthSignUpService((req as any).googlePayload)

        res.cookie('sessionToken', generateToken(User?.id), {
            httpOnly: true,
            sameSite: 'strict'
        })

        res.status(200).json({

            id: User?.id,
            firstName: User?.firstName,
            lastName: User?.lastName,
            picture: User?.picture,
            email: User?.email,
            provider: User?.provider,
            password: ''

        });

    } catch (error) {


        console.log(error)

        res.status(500).send(error)

    }

}

export async function SignUpController(req: Request, res: Response) {

    try {

        const User = await SignUpService(req.body)

        res.status(200).send(User)

    } catch (error) {

        res.status(500).send(error)

    }
}