import express from 'express'
import UserRoute from './User'

const RootRoute = express()

RootRoute.use('/user', UserRoute)

export default RootRoute