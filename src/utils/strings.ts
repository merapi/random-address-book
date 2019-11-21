import { User } from 'types'

export const normalizeString = (str: string) => {
  return str
    .trim()
    .replace(/\s\s+/g, ' ') // remove multiple spaces
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents/diacritics
    .toLowerCase()
}

export const filterByQuery = (query: string) => {
  return (user: User) => {
    const searchable = normalizeString(`${user.name.first} ${user.name.last}`)
    return searchable.includes(query)
  }
}
