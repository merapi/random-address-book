import BottomMessage from 'components/BottomMessage'
import Loader from 'components/Loader'
import { Color } from 'design'
import React from 'react'
import styled from 'styled-components'

export const renderBottomElement = (
  isEnd: boolean,
  isError: Error | null,
  isLoading: boolean,
  inSearchMode: boolean,
  exitSearchMode: () => void,
) => {
  if (isEnd) {
    return <BottomMessage>No more data.</BottomMessage>
  } else if (inSearchMode) {
    return (
      <BottomMessage>
        Exit search mode (click <Link onClick={exitSearchMode}>here</Link> or
        clear the input) to fetch more data.
      </BottomMessage>
    )
  } else if (isError) {
    return <BottomMessage>Error: {isError}.</BottomMessage>
  } else if (isLoading) {
    return <Loader />
  } else {
    return <BottomMessage>Fetch more...</BottomMessage>
  }
}

const Link = styled.span`
  text-decoration: underline;
  color: ${Color.Primary};
  cursor: pointer;
`
