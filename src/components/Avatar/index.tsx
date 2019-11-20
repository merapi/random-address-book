import styled from 'styled-components'

export default styled.img`
  border-radius: 50%;
  min-width: ${({ width }) => `${width}px`};
  min-height: ${({ width }) => `${width}px`};
  border: 1px solid #dedede;
  background: #dadada;
`
