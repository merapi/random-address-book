import { FlexAlign, Spacing } from 'design'
import React, { forwardRef, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
  padding?: Spacing
  marginTop?: Spacing
  alignItems?: FlexAlign | undefined
  justifyContent?: FlexAlign | undefined
}

const BareRow = ({ className, children }: Props, ref: any) => (
  <div ref={ref} className={className}>
    {children}
  </div>
)

export default styled(forwardRef(BareRow))`
  display: flex;
  ${({ padding }) => (padding ? `padding: ${padding}px;` : ``)}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : ``)}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
