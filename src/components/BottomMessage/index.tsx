import { Color } from 'design'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
}

const BareBottomMessage = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
)

export default styled(BareBottomMessage)`
  font-size: 16px;
  font-style: italic;
  color: ${Color.Primary};
`
