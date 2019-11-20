export interface User {
  picture: {
    thumbnail: string
  }
  name: {
    first: string
    last: string
    username: string
  }
  email: string
  location?: {
    street: {
      name: string
      number: number
    }
    country: string
    city: string
    state: string
    postcode: number
  }
  phone?: string
  cell?: string
}

export type Nationality = 'CH' | 'ES' | 'FR' | 'GB'
