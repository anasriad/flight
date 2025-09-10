import { OAuth2Client } from "google-auth-library";
import { Request, Response, NextFunction } from "express";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function VerifyIdToken(req: Request, res: Response, Next: NextFunction) {

    const { token } = req.body

    try {
        const ticket = await client.verifyIdToken({
            audience: process.env.GOOGLE_CLIENT_ID,
            idToken: token
        })

        if (!ticket.getPayload) {
            return res.status(401).json({ message: "Invalid Google token" });
        }

        (req as any).googlePayload = ticket.getPayload;

        Next()

    } catch (error) {
        res.status(501).json({ messsage: 'Forbidden' })
    }

}