import { FlexAlign, FontSize, Spacing } from 'design'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
  onClick?: () => void
  color?: string
  fontSize?: FontSize
  marginBottom?: Spacing
  marginLeft?: Spacing
  justifyContent?: FlexAlign | undefined
}

const BareTitle = ({ className, children, onClick }: Props) => (
  <div className={className} onClick={onClick}>
    {children}
  </div>
)

export default styled(BareTitle)`
  font-weight: bold;
  ${({ fontSize = FontSize.Bigger }) =>
    fontSize ? `font-size: ${typeof fontSize === 'number' ? `${fontSize}px;` : fontSize};` : ``}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px;` : ``)}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom}px;` : ``)}
  ${({ color }) => (color ? `color: ${color};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
