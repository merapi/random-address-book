import { Color, FontSize, Size, Spacing } from 'design'
import styled from 'styled-components'

interface Props {
  className?: string
}

export default styled.input<Props>`
  width: 100%;
  max-width: 320px;
  border: 1px solid #c9c9c9;
  font-size: ${FontSize.Base}px;
  padding: ${Spacing.Base}px;
  border-radius: ${Size.RoundedCorner}px;
  outline: none;
  box-shadow: 0 6px 10px -8px rgba(0, 0, 0, 0.2);
  &:focus {
    border-color: ${Color.Primary};
    /* border-color: #9c9c9c; */
  }
`
