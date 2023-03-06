import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name:"Pratik",
    email:"pratikmalipm09@gmail.com",
    mobile_no:"8862061416"
  },
  reducers: {
    changeValues: (state, action) =>{
        state.name = action.payload.name; 
        state.email = action.payload.email; 
        state.mobile_no = action.payload.mobile_no; 

    }
  }
})

export const { changeValues } = userSlice.actions

export default userSlice.reducer