import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";

import talqServices from '../../../api/services/talqServices'

export const fetchTalqType = createAsyncThunk(
  'fetchTalqType',
  async (tableId) => {
    const { data } = await talqServices.getTalqType(tableId)    
    return data.talqs
  }
)

export const listTalqType = createSlice({
  name: 'listTalqType',
  initialState: {
    talqs: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTalqType.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTalqType.fulfilled, (state, action) => {    
      state.loading = false
      state.talqs = action.payload
      state.error = ''
    })
    builder.addCase(fetchTalqType.rejected, (state, action) => {
      state.loading = false
      state.talqs = []
      state.error = action.error
    })
  }
})

export const fetchTalq = createAsyncThunk(
  'fetchTalq',
  async (typeId) => {
    const { data } = await talqServices.getTalq(typeId)        
    return data.talqs
  }
)

export const listTalq = createSlice({
  name: 'listTalq',
  initialState: {
    talqs: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTalq.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTalq.fulfilled, (state, action) => {    
      state.loading = false
      state.talqs = action.payload
      state.error = ''
    })
    builder.addCase(fetchTalq.rejected, (state, action) => {
      state.loading = false
      state.talqs = []
      state.error = action.error
    })
  }
})
