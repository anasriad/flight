import type { ScrappedSearch, SearchingType } from "../utils/Types";
import { apiSlice } from "./apiSlice";

export const FlightAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchForFlight: builder.query<ScrappedSearch[], any>({
            query: (searchData: SearchingType) => ({ url: '/flight/search', method: 'GET', params: searchData })
        })
    })
})

export const {
    useSearchForFlightQuery
} = FlightAPI