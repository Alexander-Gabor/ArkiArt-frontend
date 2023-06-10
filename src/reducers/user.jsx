import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    error: null
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
});

// export default user

export const { setUsername, setUserId, setAccessToken, setError } = user.actions;
export default user.reducer;
