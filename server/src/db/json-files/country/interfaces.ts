

export interface CountryInterface {
    name: string
    code: string
    capital: string
    region: string
    flag: string
    isoCode: string
    dialling_code: string
    currency: {
        code: string,
        name: string
        symbol: string
    }
    language: {
        code: string
        name: string
    }
}