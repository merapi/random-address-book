import Input from 'components/Input'
import { Spacing } from 'design'
import { A } from 'hookrouter'
import React from 'react'
import styled from 'styled-components'
import SettingsIcon from './SettingsIcon'

interface Props {
  className?: string
}

const BareSearchBar = ({ className }: Props) => (
  <div className={className}>
    <A href="/settings">
      <SettingsIcon />
    </A>
    <Input placeholder="Type to search" />
  </div>
)

export default styled(BareSearchBar)`
  position: sticky;
  z-index: 1;
  top: -32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(245, 246, 250, 0.3);
  backdrop-filter: blur(3px);
  padding: ${Spacing.Huge}px 0 ${Spacing.Large}px 0;
`
