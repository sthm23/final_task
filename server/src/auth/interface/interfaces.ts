export interface PayloadData {
    userId: string
    login: string
}

export interface GetTokenOptions{
    id:string,
    login:string,
}

export interface PayloadDataInRefresh{
    userId: string,
    login: string,
    iat: number,
    exp: number
}
