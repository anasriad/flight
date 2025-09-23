import ScrapFlightsService from "../services/Flight.service";
import { SearchParamters } from "../utils/types";
import { Request, Response } from 'express'
import playwright from 'playwright'

export default async function ScrappFlightsController(req: Request, res: Response) {

    console.log(req.query)
    try {
        const flights = await ScrapFlightsService(req.query as unknown as SearchParamters)

        console.log(flights)

        res.status(200).send(flights)

    } catch (error) {

        res.status(500).send(error)

    }

}