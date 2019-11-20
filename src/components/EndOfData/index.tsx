import React from 'react'
import styled from 'styled-components'
import { Color } from 'design'

interface Props {
  className?: string
}

const BareEndOfData = ({ className }: Props) => <div className={className}>No more data</div>

export default styled(BareEndOfData)`
  font-size: 16px;
  font-style: italic;
  color: ${Color.Primary};
`
