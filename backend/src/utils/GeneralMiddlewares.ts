import { Express } from "express";
import RootRoute from "../routes/Index";
import helmet from "helmet";
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import Limiter from "./Limiter";
export default function GeneralMiddlewares(theApp: Express) {

    theApp.use(RootRoute)
        .use(helmet())
        .use(cors())
        .use(Limiter)
        .use(compression())
        .use(morgan('dev'))
}