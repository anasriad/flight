import express from 'express'
import ScrappFlightsController from '../controllers/Flights.controller'

const FlightRoute = express()

FlightRoute.get('/search', ScrappFlightsController)

export default FlightRoute