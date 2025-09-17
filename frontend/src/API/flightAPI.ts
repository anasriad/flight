import type { SearchingType } from "../utils/Types";
import { apiSlice } from "./apiSlice";

const FlightAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchForFlight: builder.query({
            query: (searchData: SearchingType) => ({ url: '/flight/search', method: 'GET', body: searchData })
        })
    })
})

export const {
    useSearchForFlightQuery
} = FlightAPI