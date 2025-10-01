import { Page } from "playwright";
import { SearchParamters } from "../../utils/types";

export default async function ScrapAirArabia(page: Page, search: SearchParamters) {
    try {
        const url = `https://reach.airarabia.com/en/search?currency=AED&departureDate=${search.date}&destinations=${search.destination}&isOneWay=true&origins=${search.from}&residency=MA&adult=1&partner=airarabia`;

        await page.goto(url, { waitUntil: "networkidle" });

        // wait for flight cards to appear
        await page.waitForSelector('[data-sentry-component="JourneyOption"]', { timeout: 60000 });

        const flights = await page.$$eval(
            '[data-sentry-component="JourneyOption"]',
            (cards, search) =>
                Array.from(cards).map(card => {
                    const times = Array.from(
                        card.querySelectorAll(
                            '[data-sentry-element="JourneyLeg"] span[data-sentry-element="Text"]'
                        )
                    ).map(el => el.textContent?.trim() || "");

                    const price =
                        card.querySelector(
                            '[data-sentry-component="JourneyOptionFareInfo"] span[data-sentry-element="Text"]'
                        )?.textContent?.trim() || "";

                    return {
                        company: "Air Arabia",
                        from: search.from,
                        destination: search.destination,
                        date: search.date,
                        takeOffTime: times[0] || "",
                        landingTime: times[1] || "",
                        price,
                        companyLogo:
                            "https://www.airarabia.com/themes/custom/airarabia/logo.png",
                        totalSeats: 100,
                        seatsAvailable: 50,
                        Link: url,
                    };
                }),
            search
        );

        return flights;
    } catch (error) {
        console.error("AirArabia scraping failed:", error);
        return [];
    }
}
