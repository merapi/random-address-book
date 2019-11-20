import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BareNotFound = ({ className }: Props) => <div className={className}>Page Not Found</div>

export default styled(BareNotFound)`
  background: pink;
`
