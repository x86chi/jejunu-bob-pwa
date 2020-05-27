import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getTime, getStatus } from '../api'
import { DayofTime, Status, DayofMenu } from '../@types'
import fetchThunk from './thunk'

interface State {
  time: DayofTime
  status: Status
  data: DayofMenu
}

const dummyData = {
  점심: { 정식: ['없음'], 특식: ['없음'], 양식: ['없음'], 중식: ['없음'] },
  저녁: { 정식: ['없음'], 특식: ['없음'], 양식: ['없음'], 중식: ['없음'] }
}

const initialState: State = {
  time: getTime().dayofTime,
  status: Status.IDLE,
  data: dummyData
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    chooseTime: (state, action: PayloadAction<DayofTime>) => ({
      ...state,
      time: action.payload
    }),
    setStatus: state => ({ ...state, status: getStatus() }),
    setData: (state, action: PayloadAction<DayofMenu>) => ({
      ...state,
      data: action.payload
    })
  },
  extraReducers: builder => {
    builder.addCase(fetchThunk.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = Status.Loaded
    })
  }
})

export default slice.reducer

export const { chooseTime, setStatus, setData } = slice.actions
