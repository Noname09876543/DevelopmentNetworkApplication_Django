import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getSpecialists } from '../modules/get-specialist'
import { get_service_request } from '../modules/get-service_requests'

export interface SpecialistsState {
  value: number
}

// const test = async () => {
//   const specialistsResult = await getSpecialists()
//   if (specialistsResult.service_request_id != null){
//       const serviceRequestSpecialists = await get_service_request(Number(specialistsResult.service_request_id))
//       return serviceRequestSpecialists.specialist.length
//   } else {
//     return 0
//   }
// }

const initialState: SpecialistsState = {
  value: Number(localStorage.getItem('specialistsNum')),
  // value: await test()
}

export const specialistsSlice = createSlice({
  name: 'specialists_num',
  initialState,
  reducers: {

    setNum: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const {setNum } = specialistsSlice.actions

export default specialistsSlice.reducer