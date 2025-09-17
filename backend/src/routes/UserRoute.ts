import express from "express";
import { VerifyIdToken } from "../middlewares/oAuthMiddleware";
import { oAuthSignInController, oAuthSignUpController, SignUpController } from "../controllers/Users.controller";

const UserRoute = express()

UserRoute.post('/signIn', VerifyIdToken, oAuthSignInController)

UserRoute.post('/signUp', VerifyIdToken, oAuthSignUpController)

UserRoute.post('/registration', SignUpController)

export default UserRoute