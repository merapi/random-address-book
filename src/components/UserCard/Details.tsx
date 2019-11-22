import Avatar from 'components/Avatar'
import Div from 'components/Div'
import Row from 'components/Row'
import Title from 'components/Title'
import { Color, FlexAlign, FontSize, Spacing } from 'design'
import React from 'react'
import { User } from 'types'

interface BaseProps {
  className?: string
}

type Props = BaseProps & User

const Details = ({ className, picture, name, email }: Props) => (
  <>
    <Row alignItems={FlexAlign.Center}>
      {/* <Avatar width={48} src={`${picture.medium}?r=${email}`} /> */}
      <Avatar width={48} src={picture.medium} />
      <Div marginLeft={Spacing.Base}>
        <Title marginBottom={Spacing.Tiny}>
          {name.first} {name.last}
        </Title>
        <Title
          fontSize={[FontSize.Small, FontSize.Smaller]}
          color={Color.Primary}
        >
          {email}
        </Title>
      </Div>
    </Row>
  </>
)

export default Details
