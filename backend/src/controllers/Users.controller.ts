import { Request, Response } from "express";
import { SignInService } from "../services/User.services";
import { generateToken } from "../utils/jwt";

export async function SignInController(req: Request, res: Response) {

    try {

        const User = await SignInService((req as any).googlePayload)

        res.cookie('sessionToken', generateToken(User?.id), {
            httpOnly: true,
            sameSite: 'strict'
        })

        res.status(200).json({
            id: User?.id,
            name: User?.name,
            email: User?.email,
            provider: User?.provider,
        });

    } catch (error) {

        res.status(500).send(error)

    }

}