import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children?: ReactNode
  marginLeft?: 0 | 8 | 16 | 32 | 64
}

export default styled.div<Props>`
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px` : ``)}
`
