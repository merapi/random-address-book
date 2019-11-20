import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

const BareRow = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareRow)`
  display: flex;
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : ``)}
  ${({ justifyContent }) => (justifyContent ? `justify-content: ${justifyContent};` : ``)}
`
