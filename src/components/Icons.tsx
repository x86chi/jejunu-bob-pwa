import React from 'react'
import styled from 'styled-components'

import {
  WeekendOutlined as WeekendIcon,
  AccessTime as AccessTimeIcon,
  ErrorOutlineRounded as ErrorIcon
} from '@material-ui/icons'

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Label = styled.label`
  font-size: 2em;
`

export const Weekend = () => (
  <Div>
    <WeekendIcon style={{ fontSize: '15em' }} />
    <Label>주말</Label>
  </Div>
)

export const Waiting = () => (
  <Div>
    <AccessTimeIcon style={{ fontSize: '15em' }} />
    <Label>아직 새로운 식단을 보여줄 준비가 안되어 있어요!</Label>
  </Div>
)

export const RequestError = () => (
  <Div>
    <ErrorIcon style={{ fontSize: '15em' }} />
    <Label>학식 정보를 가져오는 데에 실패했어요.</Label>
  </Div>
)
