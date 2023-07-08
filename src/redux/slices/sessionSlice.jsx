import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    userEmail: '',
    userId: 0,
    userToken: '',
    isLoggedIn: false,
    createUserSuccess: false,
    createUserError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.userEmail = action.payload.user.email;
        state.userId = action.payload.user.id;
        state.userToken = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.createUserError = action.payload;
      })
      .addCase(handleLogout.fulfilled, (state) => {
        state.userEmail = '';
        state.userId = 0;
        state.userToken = '';
        state.isLoggedIn = false;
      })
      .addCase(handleLogout.rejected, (action) => {
        alert(action.payload);
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.userEmail = action.payload.email;
        state.userId = action.payload.id;
        state.userToken = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(validateToken.rejected, (state, action) => {
        state.createUserError = action.payload;
      })
      .addCase(createNewUser.pending, (state) => {
        state.createUserSuccess = false;
        state.createUserError = null;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.createUserSuccess = true;
        state.createUserError = null;
        state.userEmail = action.payload.user.email;
        state.userId = action.payload.user.id;
        state.userToken = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.createUserSuccess = false;
        state.createUserError = action.payload;
      })
  },
})

// Action creators are generated for each case reducer function
export const { logout } = sessionSlice.actions

export default sessionSlice.reducer

// ----------------------------------------------------------------------

export const createNewUser = createAsyncThunk(  // This async thunk was required to ensure the signup form worked properly
  'session/createNewUser',
  async (body, { rejectWithValue }) => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
      const response = await fetch(`${backend_url}/accounts/create-customer/`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await response.json();
      console.log('New customer: ', data);
  
      if (data.token) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
)

// ----------------------------------------------------------------------

// Handles logging in an existing user
export const handleLogin = createAsyncThunk(
  'session/handleLogin',
  async (body, { rejectWithValue }) => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
      print('backend_url: ', backend_url)
      const response = await fetch(`${backend_url}/accounts/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
  
      if (data.token) {
        return data;  // Return data here, not dispatching action
      } else {
        return rejectWithValue(data.error);
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

// ----------------------------------------------------------------------

// Handles validating token and resetting login context
export const validateToken = createAsyncThunk(
  'session/validateToken',
  async (token, { rejectWithValue }) => {
    try {
      const backend_url = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
      const response = await fetch(`${backend_url}/accounts/user`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      });
  
      const data = await response.json();
  
      if (data.okay) {
        return data;  // Return data here, not dispatching action
      } else {
        return rejectWithValue("No valid token found.");
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

// ----------------------------------------------------------------------

// Handles logging out a user
export const handleLogout = createAsyncThunk(
  'session/handleLogout',
  async (_, { rejectWithValue, getState }) => {
    const userToken = getState().session.userToken;
    const backend_url = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
    try {
      const response = await fetch(`${backend_url}/accounts/logout`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userToken}`,
        },
      });

      if (response.ok) {
        return {};  // You can return anything here, since you don't need a result.
      } else {
        return rejectWithValue("Failed to log out.");
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);
