import React, { ReactNode } from 'react'
import styled from 'styled-components'

type sizes = 0 | 4 | 8 | 16 | 32 | 64

interface Props {
  className?: string
  children: ReactNode
  color?: string
  fontSize?: number | string
  marginBottom?: sizes
  marginLeft?: sizes
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const BareTitle = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareTitle)`
  font-weight: bold;
  ${({ fontSize = 20 }) =>
    fontSize ? `font-size: ${typeof fontSize === 'number' ? `${fontSize}px;` : fontSize};` : ``}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px;` : ``)}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom}px;` : ``)}
  ${({ color }) => (color ? `color: ${color};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
