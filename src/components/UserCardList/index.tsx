import { Size } from 'design'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
}

const BareUserCardList = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareUserCardList)`
  padding: ${Size.CardGap}px 0 0 ${Size.CardGap}px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
