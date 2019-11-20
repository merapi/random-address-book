import Input from 'components/Input'
import Row from 'components/Row'
import { FlexAlign, Spacing } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareSearchBar = ({ className }: Props) => (
  <div className={className}>
    <Row justifyContent={FlexAlign.Center}>
      <Input placeholder="Type to search" />
    </Row>
  </div>
)

export default styled(BareSearchBar)`
  padding: ${Spacing.Large}px;
  padding-top: ${Spacing.Huge}px;
`
