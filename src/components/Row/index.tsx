import { FlexAlign, Spacing } from 'design'
import React, { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
  padding?: Spacing | string
  marginTop?: Spacing
  alignItems?: FlexAlign | undefined
  justifyContent?: FlexAlign | undefined
}

const BareRow = ({ className, children }: Props, ref: any) => (
  <div ref={ref} className={className}>
    {children}
  </div>
)

function isSpacing(arg: any): arg is Spacing {
  return typeof arg === 'number' // Checking can be more complex than this
}

export default styled(forwardRef(BareRow))`
  display: flex;
  ${({ padding }) =>
    padding ? `padding: ${padding}${isSpacing(padding) ? `px` : ``};` : ``}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : ``)}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : ``)}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ``}
`
