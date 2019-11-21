import { Spacing } from 'design'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { styledProperty } from 'utils/styled'

interface Props {
  className?: string
  children?: ReactNode
  marginLeft?: Spacing | Spacing[]
}

export default styled.div<Props>`
  ${styledProperty('margin-left')}
`
