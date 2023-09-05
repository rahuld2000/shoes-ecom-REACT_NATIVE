import { createSlice } from '@reduxjs/toolkit'

const initialState={
    user:null,
    userLoading:false
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
     setUser:(state,action)=>{
        state.user=action.payload
     },
     setLoading:(state,action)=>{
        state.user=action.payload
     }
  }
})

export const { setUser,setLoading } = user.actions
export default user.reducer