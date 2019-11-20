import * as flags from 'assets/flags'
import Title from 'components/Title'
import { Size, Spacing } from 'design'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Nationality } from 'types'

interface Props {
  className?: string
  onSubmit: (nationalities: Nationality[]) => void
}

const supportedNationalities: Nationality[] = ['CH', 'ES', 'FR', 'GB']

const BareSelectNationalities = ({ className, onSubmit }: Props) => {
  const [nationalities, setNationalities] = useState<Nationality[]>(['ES'])
  const onChange = (nationality: Nationality) => (checked: boolean) => {
    setNationalities(state => {
      let newState = [...state]
      if (checked) {
        newState.push(nationality)
      } else {
        newState = newState.filter(n => n !== nationality)
      }
      onSubmit(newState)
      return newState
    })
  }

  return (
    <div className={className}>
      <Title marginBottom={Spacing.Base}>Select nationalities:</Title>
      {supportedNationalities.map(nationality => (
        <Option
          key={nationality}
          enabled={nationalities.includes(nationality)}
          nationality={nationality}
          onChange={onChange(nationality)}
        />
      ))}
    </div>
  )
}

interface OptionProps {
  className?: string
  enabled?: boolean
  nationality: Nationality
  onChange: (checked: boolean) => void
}

const BareOption = ({ nationality, enabled, onChange, className }: OptionProps) => {
  const Flag = styled(flags[nationality])<{ disabled?: boolean }>`
    ${({ disabled }) => disabled && `filter: grayscale(100%);`}
  `
  const onClick = () => {
    onChange(!enabled)
  }

  return (
    <div className={className} onClick={onClick}>
      <Flag disabled={!enabled} width={48} />
      <Title marginLeft={Spacing.Base}>{nationality}</Title>
    </div>
  )
}

const Option = styled(BareOption)`
  display: flex;
  width: 140px;
  background: ${({ enabled }) => (enabled ? '#89ff8d' : '#dadada')};
  padding: 10px 15px;
  border-radius: ${Size.RoundedCorner}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${Spacing.Small}px;
  cursor: pointer;
  user-select: none;
`

export default styled(BareSelectNationalities)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
