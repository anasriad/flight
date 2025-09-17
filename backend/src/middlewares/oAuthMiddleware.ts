import { OAuth2Client } from "google-auth-library";
import { Request, Response, NextFunction } from "express";


export async function VerifyIdToken(req: Request, res: Response, Next: NextFunction) {

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


    const { token } = req.body


    try {
        const ticket = await client.verifyIdToken({
            audience: process.env.GOOGLE_CLIENT_ID,
            idToken: token
        })

        if (!ticket.getPayload) {
            return res.status(401).json({ message: "Invalid Google token" });
        }

        (req as any).googlePayload = ticket.getPayload();

        console.log((req as any).googlePayload)


        Next()

    } catch (error) {
        res.status(501).json({ messsage: 'Forbidden' })
    }

}