import Title from 'components/Title'
import { Color, Spacing } from 'design'
import { A } from 'hookrouter'
import React from 'react'
import styled from 'styled-components'
import { Nationality } from 'types'
import SelectNationalities from './SelectNationalities'

interface Props {
  className?: string
}

const BareSettings = ({ className }: Props) => {
  const onNationalitiesChange = (nationalities: Nationality[]) => {
    console.log(nationalities)
  }

  return (
    <div className={className}>
      <A style={{ color: Color.Primary }} href="/">
        <Title marginBottom={Spacing.Huge}>Back to search</Title>
      </A>
      <SelectNationalities onSubmit={onNationalitiesChange} />
    </div>
  )
}

export default styled(BareSettings)`
  padding: ${Spacing.Huge}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
