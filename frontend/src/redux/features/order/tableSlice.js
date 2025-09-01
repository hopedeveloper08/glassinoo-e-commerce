import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";

import tableServices from '../../../api/services/tableServices'

export const fetchTablesType = createAsyncThunk(
  'fetchTablesType',
  async () => {
    const { data } = await tableServices.getTableType()
    return data.tables
  }
)

export const fetchTablesMaterial = createAsyncThunk(
  'fetchTablesMaterial',
  async () => {
    const { data } = await tableServices.getTableMaterial()
    return data.tables
  }
)

export const listTableType = createSlice({
  name: 'listTableType',
  initialState: {
    tables: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTablesType.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTablesType.fulfilled, (state, action) => {
      state.loading = false
      state.tables = action.payload
      state.error = ''
    })
    builder.addCase(fetchTablesType.rejected, (state, action) => {
      state.loading = false
      state.tables = []
      state.error = action.error
    })
  }
})

export const listTableMaterial = createSlice({
  name: 'listTableMaterial',
  initialState: {
    tables: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTablesMaterial.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTablesMaterial.fulfilled, (state, action) => {
      state.loading = false
      state.tables = action.payload
      state.error = ''
    })
    builder.addCase(fetchTablesMaterial.rejected, (state, action) => {
      state.loading = false
      state.tables = []
      state.error = action.error
    })
  }
}) 