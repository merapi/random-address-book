import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Spacing } from 'design'

interface Props {
  className?: string
  children?: ReactNode
  marginLeft?: Spacing
}

export default styled.div<Props>`
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px` : ``)}
`
