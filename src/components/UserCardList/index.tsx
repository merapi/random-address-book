import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  children: ReactNode
}

const BareUserCardList = ({ className, children }: Props) => <div className={className}>{children}</div>

export default styled(BareUserCardList)`
  padding: 32px 0 0 32px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
