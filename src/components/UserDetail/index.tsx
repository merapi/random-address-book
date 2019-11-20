import Div from 'components/Div'
import Row from 'components/Row'
import Title from 'components/Title'
import Details from 'components/UserCard/Details'
import { Color, FontSize, Size, Spacing } from 'design'
import React from 'react'
import styled from 'styled-components'
import { User } from 'types'

interface BaseProps {
  className?: string
}

type Props = BaseProps & User

const BareUserDetail = ({ className, picture, name, email, location, phone, cell }: Props) => {
  const card = { picture, name, email }

  return (
    <div className={className}>
      <Details {...card} />
      <Row marginTop={Spacing.Large}>
        {location && (
          <div>
            <Title fontSize={FontSize.Smaller} marginBottom={Spacing.Small} color={Color.Primary}>
              Location
            </Title>
            <p>
              {location.street.name} {location.street.number}
              <br />
              {location.postcode} {location.city}
              <br />
              {location.state}, {location.country}
            </p>
          </div>
        )}
        {(phone || cell) && (
          <Div marginLeft={Spacing.Large}>
            <Title fontSize={FontSize.Smaller} marginBottom={Spacing.Small} color={Color.Primary}>
              Contact
            </Title>
            <p>
              Phone: {phone}
              <br />
              Cell: {cell}
            </p>
          </Div>
        )}
      </Row>
    </div>
  )
}

export default styled(BareUserDetail)`
  padding: ${Spacing.Medium}px ${Spacing.Medium}px ${Spacing.Tiny}px ${Spacing.Medium}px;
  background: white;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  border-radius: ${Size.RoundedCorner}px;
`
