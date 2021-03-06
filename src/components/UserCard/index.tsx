import { Size, Spacing } from 'design'
import React, { forwardRef, memo, MouseEvent } from 'react'
import styled from 'styled-components'
import { User } from 'types'
import Details from './Details'

interface BaseProps {
  className?: string
  style?: any
  onClick?: (event: MouseEvent) => void
}

type Props = BaseProps & User

const BareUserCard = (
  { className, onClick, picture, name, email, ...rest }: Props,
  ref: any,
) => {
  const user = { picture, name, email }
  return (
    <div
      data-testid={`nat-${rest.nat}`}
      className={className}
      onClick={onClick}
      ref={ref}
    >
      <Details {...user} />
    </div>
  )
}

const UserCard = styled(forwardRef<HTMLDivElement, Props>(BareUserCard))`
  display: flex;
  flex-shrink: 0;
  width: 280px;
  @media (min-width: 360px) {
    width: 320px;
  }
  overflow: hidden;
  min-height: 96px;
  padding: ${Spacing.Base}px;
  @media (min-width: 360px) {
    padding: ${Spacing.Medium}px;
  }
  background: white;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  &:hover {
    box-shadow: 0 12px 16px -8px rgba(0, 0, 0, 0.22);
    transform: scale(1.1);
    /* height: 200px; */
  }
  border-radius: ${Size.RoundedCorner}px;
  margin: 0 ${Size.CardGap}px ${Size.CardGap}px 0;
  ${({ onClick }) => (typeof onClick === 'function' ? `cursor: zoom-in` : ``)}
`

export default memo(UserCard, (prev, next) => {
  if (prev.login && next.login) {
    return prev.login.uuid === next.login.uuid
  }
  return false
})
