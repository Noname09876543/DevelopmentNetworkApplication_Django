import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getCartItems = createAsyncThunk(
  'api/service_requests/{id}/',
  async (service_request_id: number, thunkAPI) => {
    try {
      const resp = await axios(`/api/service_requests/${service_request_id}/`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getServiceRequest = createAsyncThunk(
  'api/specialists/',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(`/api/specialists/`);
      if (resp.data.service_request_id != null){
        thunkAPI.dispatch(getCartItems(resp.data.service_request_id));
      }
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);


const initialState = {
  specialists: [],
  service_request_id: -1,
  value: 0,
};


export const specialistsSlice = createSlice({
  name: 'specialists_num',
  initialState,
  reducers: {
    setNum: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    deleteSpec: (state, action: PayloadAction<number>) => {
      state.specialists = state.specialists.filter(item=>item['id'] !=action.payload );
    },
  },
  extraReducers: (builder) => {
  builder
      .addCase(getCartItems.pending, (state) => {
      })
      .addCase(getServiceRequest.fulfilled, (state, action) => {
        if (action.payload.service_request_id != null){
          state.service_request_id = action.payload.service_request_id;
        }
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.specialists = action.payload.specialist;
        if (state.specialists){
          state.value = state.specialists.length
        }
      })
      .addCase(getCartItems.rejected, (state, action) => {
      });
  },
})

export const {setNum, deleteSpec } = specialistsSlice.actions

export default specialistsSlice.reducer