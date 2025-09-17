export interface FlightDetails {
    Destination: string,
    Price: number,
    Description: string,
    Image: string,
    ratings: number,
    ImageAlt: string
}

export interface UserType {
    id: string | null,
    name: string | null,
    email: string | null,
    password: string | null,
    provider: string | null,
}

export interface SignInData {
    email: string,
    password: string
}

export interface SearchingType {
    from: string,
    destination: string,
    date: string,
}

export interface ScrappedSearch {
    from: string,
    destination: string,
    date: string,
    company: string,
    companyLogo: string | null,
    price: number,
    totalSeats: number,
    SeatsAvailable: number,
}