import Title from 'components/Title'
import { Color, FontSize, Spacing } from 'design'
import { A } from 'hookrouter'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareNotFound = ({ className }: Props) => (
  <div className={className}>
    <Title fontSize={FontSize.Big} marginBottom={Spacing.Large}>
      Page Not Found
    </Title>
    <A href="/">
      <Title color={Color.Primary}>Go to Homepage</Title>
    </A>
  </div>
)

export default styled(BareNotFound)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
