import { Color, Spacing } from 'design'
import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareEndOfData = ({ className }: Props) => <div className={className}>No more data</div>

export default styled(BareEndOfData)`
  font-size: 16px;
  font-style: italic;
  color: ${Color.Primary};
  padding: ${Spacing.Base}px 0 ${Spacing.Large}px 0;
`
