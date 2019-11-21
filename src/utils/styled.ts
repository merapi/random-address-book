import { BREAKPOINTS } from 'config/consts'

const breakpoints = BREAKPOINTS

const parseValue = (value: string | number, property?: string) => {
  if (typeof value === 'string') {
    return value
  } else {
    return `${value}px`
  }
}

const parseProperty = (property: string, value: string | number) => {
  const parsedValue = parseValue(value, property)
  return `${property}: ${parsedValue};`
}

export const parseStyle = (property: string, value: any | any[]) => {
  if (Array.isArray(value)) {
    return value.reduce((acc, v, i) => {
      if (i === 0) return acc + parseProperty(property, v)
      const breakpoint = breakpoints[i - 1]
      return (
        acc +
        `
@media (min-width: ${breakpoint}px) {
  ${parseProperty(property, v)}
}
        `
      )
    }, '')
  } else {
    return parseProperty(property, value)
  }
}

const camelCased = (str: string) =>
  str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase()
  })

export const styledProperty = (property: string, defaultValue?: any) => (
  props: any,
) => {
  return parseStyle(property, props[camelCased(property)] || defaultValue)
}
