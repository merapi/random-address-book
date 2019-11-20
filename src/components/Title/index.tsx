import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Spacing, FontSize } from 'design'

interface Props {
  className?: string
  children: ReactNode
  color?: string
  fontSize?: FontSize
  marginBottom?: Spacing
  marginLeft?: Spacing
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const BareTitle = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareTitle)`
  font-weight: bold;
  ${({ fontSize = FontSize.Bigger }) =>
    fontSize ? `font-size: ${typeof fontSize === 'number' ? `${fontSize}px;` : fontSize};` : ``}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px;` : ``)}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom}px;` : ``)}
  ${({ color }) => (color ? `color: ${color};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
