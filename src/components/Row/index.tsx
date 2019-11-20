import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { FlexAlign } from 'design'

interface Props {
  className?: string
  children: ReactNode
  alignItems?: FlexAlign | undefined
  justifyContent?: FlexAlign | undefined
}

const BareRow = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareRow)`
  display: flex;
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
