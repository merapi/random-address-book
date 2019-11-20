import React, { ReactNode, MouseEvent } from 'react'
import styled from 'styled-components'
import Avatar from 'components/Avatar'
import Row from 'components/Row'
import Title from 'components/Title'
import Div from 'components/Div'
import { User } from 'types'
import { Spacing, FontSize, Size, Color, FlexAlign } from 'design'

interface Props {
  className?: string
  onClick?: (event: MouseEvent) => void
}

const BareUserCard = ({ className, onClick, picture, name, email }: Props & User) => (
  <div className={className} onClick={onClick}>
    <Row alignItems={FlexAlign.Center}>
      <Avatar width={48} src={picture.thumbnail} />
      <Div marginLeft={Spacing.Base}>
        <Title marginBottom={Spacing.Tiny}>
          {name.first} {name.last}
        </Title>
        <Title fontSize={FontSize.Smaller} color={Color.Primary}>
          {email}
        </Title>
      </Div>
    </Row>
  </div>
)

export default styled(BareUserCard)`
  display: flex;
  flex-shrink: 0;
  width: 360px;
  padding: ${Spacing.Medium}px;
  background: white;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  &:hover {
    box-shadow: 0 12px 16px -8px rgba(0, 0, 0, 0.22);
    transform: scale(1.1);
  }
  border-radius: 8px;
  margin: 0 ${Size.CardGap}px ${Size.CardGap}px 0;
  ${({ onClick }) => (typeof onClick === 'function' ? `cursor: pointer` : ``)}
`
