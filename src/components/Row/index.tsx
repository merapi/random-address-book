import { FlexAlign, Spacing } from 'design'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
  padding?: Spacing
  alignItems?: FlexAlign | undefined
  justifyContent?: FlexAlign | undefined
}

const BareRow = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareRow)`
  display: flex;
  ${({ padding }) => (padding ? `padding: ${padding}px;` : ``)}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
