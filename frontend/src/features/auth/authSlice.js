import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import Cookies from 'js-cookie'

const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null
const initialState = {
  user,
  isError: false,
  isSuccess: false,
  message: '',
}

// sssssssssssssssssssssssss
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.messag ||
        err.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
//Login new user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.messag ||
      err.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

// ssssssssssssssssssssssssssss

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})
export const { reset } = authSlice.actions
export default authSlice.reducer
