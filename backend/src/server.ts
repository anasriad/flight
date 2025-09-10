
import express from 'express'
import dotenv from 'dotenv'
import GeneralMiddlewares from './utils/GeneralMiddlewares'
import log from './utils/Logger'
import MongoConnector from './db/connector'

const Server = express()

dotenv.config()

MongoConnector()

GeneralMiddlewares(Server)

Server.listen(process.env.PORT!, () =>
  log.info(`Server started at port ${process.env.PORT!}`)
);