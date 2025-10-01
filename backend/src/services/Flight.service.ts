import playwright from 'playwright';
import { SearchParamters } from '../utils/types';
import ScrapRyanAir from './URLs/RyanAir';
import ScrapAirArabia from './URLs/AirArabia';

export default async function ScrapFlightsService(search: SearchParamters) {
    const Flights = []
    try {
        const browser = await playwright.chromium.launch({ headless: false });
        const context = await browser.newContext();
        const RyanAir = await context.newPage();
        const AirArabia = await context.newPage();



        const [ryanairFlights, airarabiaFlights] = await Promise.all([
            ScrapRyanAir(RyanAir, search),
            ScrapAirArabia(AirArabia, search),
        ]);

        browser.close()
        return [...ryanairFlights, ...airarabiaFlights]
    } catch (error) {
        console.error(error);
        throw error;
    }
}
