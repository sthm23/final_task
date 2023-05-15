export interface Airport {
    id: number,
    code: string,
    name: string,
    city: string,
    state: string,
    country: string
}

export interface FlightTicket {
    from:number,
    destination: number,
    date?: Date,
    rangeDate?:{
        start:Date,
        end:Date
    },
    count: number
}
export interface FlightResult {
    from: Airport,
    fromDate: Date,
    destination: Airport,
    destinationDate: Date,
    duration: number,
    flightNumber: string,
    seats: number,
    price: number,
    luggage: number,
    flight: boolean
}