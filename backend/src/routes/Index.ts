import express from 'express'
import UserRoute from './UserRoute'
import FlightRoute from './FlightRoute'

const RootRoute = express()

RootRoute.use('/user', UserRoute)
RootRoute.use('/flight', FlightRoute)

export default RootRoute