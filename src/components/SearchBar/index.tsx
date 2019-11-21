import Input from 'components/Input'
import { Spacing } from 'design'
import { A } from 'hookrouter'
import React, { ChangeEvent, useCallback } from 'react'
import styled from 'styled-components'
import SettingsIcon from './SettingsIcon'

interface Props {
  className?: string
  onSubmit: (query: string) => void
}

const BareSearchBar = ({ className, onSubmit }: Props) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onSubmit(event.target.value)
    },
    [onSubmit],
  )

  return (
    <div className={className}>
      <A href="/settings">
        <SettingsIcon />
      </A>
      <Input placeholder="Type to search" onChange={onChange} />
    </div>
  )
}

export default styled(BareSearchBar)`
  position: sticky;
  z-index: 1;
  top: -48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(245, 246, 250, 0.9);
  /* backdrop-filter: blur(3px); */
  padding: ${Spacing.Huge}px 0 16px 0;
`
