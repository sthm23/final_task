

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

/*35 country*/
const country_list = [
    'United Arab Emirates', 'United States', 'United Kingdom',
    'Brazil', 'Belgium', 'Belarus', 'Azerbaijan', 'Egypt',
    'Armenia', 'Argentina', 'Uzbekistan', 'Ukraine',
    'Turkey', 'Thailand', 'Saudi Arabia', 'Switzerland',
    'South Korea', 'China', 'Finland', 'Georgia',
    'Germany', 'Italy', 'Kazakhstan', 'Czech Republic',
    'Japan', 'Russia', 'France', 'Spain', 'Maldives',
    'Uruguay',  'Canada',
  ]

  export enum CountryEnum {
    argentina = 'Argentina',
    armenia = 'Armenia',
    azerbaijan = 'Azerbaijan',
    belgium = 'Belgium',
    belarus = 'Belarus',
    brazil = 'Brazil',
    canada = 'Canada',
    uzbekistan = 'Uzbekistan',
    uruguay = 'Uruguay',
    united_state = 'United States',
    united_kingdom = 'United Kingdom',
    united_arab_emirates = 'United Arab Emirates',
    ukraine = 'Ukraine',
    turkey = 'Turkey',
    thailand = 'Thailand',
    switzerland = 'Switzerland',
    south_korea = 'South Korea',
    saudi_arabia = 'Saudi Arabia',
    china = 'China',
    finland = 'Finland',
    georgia = 'Georgia',
    germany = 'Germany',
    italy = 'Italy',
    kazakhstan = 'Kazakhstan',
    czech_republic = 'Czech Republic',
    japan = 'Japan',
    russia = 'Russia',
    france = 'France',
    spain = 'Spain',
    maldives = 'Maldives',
    egypt = 'Egypt',
  }