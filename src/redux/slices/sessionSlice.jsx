import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    userEmail: 'counter',
    userId: 0,
    userToken: '',
    createUserSuccess: false,
    createUserError: null,
  },
  reducers: {
    createUserStart: (state) => {
      state.createUserSuccess = false;
      state.createUserError = null;
    },
    createUserSuccess: (state, action) => {
      state.createUserSuccess = true;
      state.createUserError = null;
      state.userEmail = action.payload.email;
      state.userId = action.payload.id;
      state.userToken = action.payload.token;
    },
    createUserFailure: (state, action) => {
      state.createUserSuccess = false;
      state.createUserError = action.payload;
    },
    loginSuccess: (state, action) => {
      state.userEmail = action.payload.email;
      state.userId = action.payload.id;
      state.userToken = action.payload.token;
    },
    logout: (state, action) => {
      state.userEmail = '';
      state.userId = 0;
      state.userToken = '';
    },
    validateTokenSuccess: (state, action) => {
      state.userEmail = action.payload.email;
      state.userId = action.payload.id;
      state.userToken = action.payload.token;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.createUserSuccess = false;
        state.createUserError = null;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.createUserSuccess = true;
        state.createUserError = null;
        state.userEmail = action.payload.email;
        state.userId = action.payload.id;
        state.userToken = action.payload.token;
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

export const createNewUser = createAsyncThunk(
  'session/createNewUser',
  async (body, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/accounts/create-customer/`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await response.json();
  
      if (data.ok) {
        return data.new_customer;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
)

// ----------------------------------------------------------------------

// Handles logging in an existing user
export async function handleLogin(body) {
  const response = await fetch(`http://127.0.0.1:8000/accounts/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }
  );
  console.log('Response: ', response);

  const data = await response.json();

  if (data.ok) {
    sessionSlice.actions.loginSuccess(data);
  }
  else {
    alert("Failed to log in.");
  }
};

// ----------------------------------------------------------------------

// Handles validating token and resetting login context
export async function validateToken(token) {
  const response = await fetch(`http://127.0.0.1:8000/accounts/user`, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  const data = await response.json();

  if (data.okay) {
    sessionSlice.actions.loginSuccess(data);
  }
  else {
    alert("No valid tokern found.");
  }
};

