import Title from 'components/Title'
import { Color, Spacing } from 'design'
import { A } from 'hookrouter'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as settingsActions from 'store/settings/actions'
import * as settingsSelectors from 'store/settings/selectors'
import styled from 'styled-components'
import { Nationality } from 'types'
import SelectNationalities from './SelectNationalities'

interface Props {
  className?: string
}

const BareSettings = ({ className }: Props) => {
  const dispatch = useDispatch()
  const nationalities = useSelector(settingsSelectors.nationalities)

  const onNationalitiesChange = (nationalities: Nationality[]) => {
    dispatch(settingsActions.setNationalities(nationalities))
  }

  return (
    <div className={className}>
      <A style={{ color: Color.Primary }} href="/">
        <Title marginBottom={Spacing.Huge}>Back to search</Title>
      </A>
      <SelectNationalities
        nationalities={nationalities}
        onSubmit={onNationalitiesChange}
      />
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
