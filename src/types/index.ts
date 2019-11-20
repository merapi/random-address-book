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
}

export type Nationality = 'CH' | 'ES' | 'FR' | 'GB'
