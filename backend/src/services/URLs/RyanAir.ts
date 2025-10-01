import { Page } from "playwright";
import { SearchParamters } from "../../utils/types";
export default async function ScrapRyanAir(page: Page, search: SearchParamters) {
    try {
        const url = `https://www.ryanair.com/ma/fr/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=${search.date}&dateIn=&isConnectedFlight=false&discount=0&promoCode=&isReturn=false&originIata=${search.from}&destinationIata=${search.destination}&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=${search.date}&tpEndDate=&tpDiscount=0&tpPromoCode=&tpOriginIata=${search.from}&tpDestinationIata=${search.destination}`;

        await page.goto(url, { waitUntil: 'domcontentloaded' });

        await page.waitForSelector('[data-ref="flight-card_all_information"]', { timeout: 120000 });

        const flights = await page.$$eval(
            '[data-ref="flight-card_all_information"]',
            (cards, search) => cards.map(card => {
                return {
                    company: 'Ryanair',
                    from: card.querySelector('[data-ref^="origin-airport_"]')?.textContent?.trim() || search.from,
                    destination: card.querySelector('[data-ref^="destination-airport_"]')?.textContent?.trim() || search.destination,
                    date: search.date,
                    takeOffTime: card.querySelector('[data-ref="flight-segment.departure"] .flight-info__hour')?.textContent?.trim() || '',
                    landingTime: card.querySelector('[data-ref="flight-segment.arrival"] .flight-info__hour')?.textContent?.trim() || '',
                    price: card.querySelector('.flight-card-summary__full-price')?.textContent?.trim() || '',
                    companyLogo: card.querySelector('img[alt="Ryanair"]')?.getAttribute('src') || '',
                    totalSeats: 100,
                    seatsAvailable: 50,
                    Link: `https://www.ryanair.com/ma/fr/trip/flights/select?adults=1&teens=0&children=0&infants=0&dateOut=${search.date}&dateIn=&isConnectedFlight=false&discount=0&promoCode=&isReturn=false&originIata=${search.from}&destinationIata=${search.destination}&tpAdults=1&tpTeens=0&tpChildren=0&tpInfants=0&tpStartDate=${search.date}&tpEndDate=&tpDiscount=0&tpPromoCode=&tpOriginIata=${search.from}&tpDestinationIata=${search.destination}`
                };
            }),
            search
        );
        return flights;
        
    } catch (error) {

        throw error
    }
}