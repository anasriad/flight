import { Express } from "express";
import express from "express";
import helmet from "helmet";
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import Limiter from "./Limiter";
export default function GeneralMiddlewares(theApp: Express) {

    theApp.use(express.json())

        .use(helmet())
        .use(cors({
            origin: "http://localhost:5173",
            credentials: true,
        }))
        .use(Limiter)
        .use(compression())
        .use(morgan('dev'))

}