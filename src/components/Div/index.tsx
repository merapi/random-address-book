import { Spacing } from 'design'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children?: ReactNode
  marginLeft?: Spacing
}

export default styled.div<Props>`
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px` : ``)}
`
