export interface SearchParamters {
    destination: string,
    from: string,
    date: string
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
    takeOffTime:number,
    landingTime:number,
    Link:string
}

