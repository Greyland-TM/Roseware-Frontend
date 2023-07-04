import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    userEmail: 'counter',
    userId: 0,
    userToken: '',
  },
  reducers: {
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
})

// Action creators are generated for each case reducer function
export const { logout } = sessionSlice.actions

export default sessionSlice.reducer

// ----------------------------------------------------------------------

export async function createNewUser(body, navigate) {
  const response = await fetch(`${process.env.BACKEND_URL}/accounts/create-customer/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  console.log('createNewUser: ', data);

  if (data.ok) {
    dispatch(sessionSlice.actions.loginSuccess(data));
  } else {
    alert("Failed to create user.");
  }
}

// ----------------------------------------------------------------------

// Handles logging in an existing user
export async function handleLogin(body) {
  const response = await fetch(`${process.env.BACKEND_URL}/accounts/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }
  );
  console.log('Response: ', response);

  const data = await response.json();

  if (data.ok) {
    dispatch(sessionSlice.actions.loginSuccess(data));
  }
  else {
    alert("Failed to log in.");
  }
};

// ----------------------------------------------------------------------

// Handles validating token and resetting login context
export async function validateToken(token) {
  const response = await fetch(`${process.env.BACKEND_URL}/accounts/user`, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  const data = await response.json();

  if (data.okay) {
    dispatch(sessionSlice.actions.loginSuccess(data));
  }
  else {
    alert("No valid tokern found.");
  }
};

