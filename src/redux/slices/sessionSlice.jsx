import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    userToken: "",
    isLoggedIn: false,
    user: {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      profile_picture: "",
      phoneNumber: "",
      package_plans: [],
      organization: {},
      has_synced_pipedrive: false,
      has_synced_stripe: false,
    },
    // Form Fields
    validationCheckComplete: false,
    createUserSuccess: false,
    createUserError: null,
    isPipedriveSyncing: false,
    isStripeSyncing: false,
  },
  reducers: {
    validationComplete: (state) => {
      state.validationCheckComplete = true;
    },
    updateIsPipedriveSyncing: (state, action) => {
      state.isPipedriveSyncing = action.payload;
    },
    updateIsStripeSyncing: (state, action) => {
      state.isStripeSyncing = action.payload;
    },
    updateHasSyncedPipedrive: (state, action) => {
      state.user.has_synced_pipedrive = action.payload;
    },
    updateHasSyncedStripe: (state, action) => {
      state.user.has_synced_stripe = action.payload;
    },
    updatePackagePlans: (state, action) => {
      state.user.package_plans = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userId = action.payload.user.id;
        state.userToken = action.payload.token;
        state.isLoggedIn = true;
        state.validationCheckComplete = true;
        state.hasSyncedPipedrive = action.payload.user.has_synced_pipedrive;
        state.hasSyncedStripe = action.payload.user.has_synced_stripe;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.createUserError = action.payload;
        state.validationCheckComplete = true;
      })
      .addCase(handleLogout.fulfilled, (state) => {
        state.user = {};
        state.userId = 0;
        state.userToken = "";
        state.isLoggedIn = false;
        state.validationCheckComplete = true;
      })
      .addCase(handleLogout.rejected, (action) => {
        alert(action.payload);
        state.validationCheckComplete = true;
      })
      .addCase(validateToken.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userId = action.payload.user.id;
        state.userToken = action.payload.token;
        state.isLoggedIn = true;
        state.validationCheckComplete = true;
        state.hasSyncedPipedrive = action.payload.user.has_synced_pipedrive;
        state.hasSyncedStripe = action.payload.user.has_synced_stripe;
      })
      .addCase(validateToken.rejected, (state, action) => {
        state.createUserError = action.payload;
        state.validationCheckComplete = true;
      })
      .addCase(createNewUser.pending, (state) => {
        state.createUserSuccess = false;
        state.createUserError = null;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.createUserSuccess = true;
        state.createUserError = null;
        if (action.payload.user.status !== "lead") {
          state.user = action.payload.user;
          state.userId = action.payload.user.id;
          state.userToken = action.payload.token;
          state.isLoggedIn = true;
        }
        state.validationCheckComplete = true;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.createUserSuccess = false;
        state.createUserError = action.payload;
        state.validationCheckComplete = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  logout,
  validationComplete,
  updateIsPipedriveSyncing,
  updateIsStripeSyncing,
  updateHasSyncedPipedrive,
  updateHasSyncedStripe,
  updatePackagePlans
} = sessionSlice.actions;

export default sessionSlice.reducer;

// ----------------------------------------------------------------------

export const createNewUser = createAsyncThunk(
  // This async thunk was required to ensure the signup form worked properly
  "session/createNewUser",
  async (body, { rejectWithValue }) => {
    try {
      const backend_url =
        import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${backend_url}/accounts/create-customer/`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("rosewareAuthToken", data.token);
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

// ----------------------------------------------------------------------

// Handles logging in an existing user
export const handleLogin = createAsyncThunk(
  "session/handleLogin",
  async (body, { rejectWithValue }) => {
    try {
      const backend_url =
        import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${backend_url}/accounts/login`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("rosewareAuthToken", data.token);
        return data; // Return data here, not dispatching action
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
  "session/validateToken",
  async (token, { rejectWithValue }) => {
    try {
      const backend_url =
        import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000";
      const response = await fetch(`${backend_url}/accounts/customer/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      const data = await response.json();

      if (data.ok) {
        const token = localStorage.getItem("rosewareAuthToken");
        return { token: token, user: data.customer }; // Return data here, not dispatching action
      } else {
        return rejectWithValue("No valid token found.");
      }
    } catch (error) {
      console.log("Returning error: ", error);
      return rejectWithValue(error.toString());
    }
  }
);

// ----------------------------------------------------------------------

// Handles logging out a user
export const handleLogout = createAsyncThunk(
  "session/handleLogout",
  async (_, { rejectWithValue, getState }) => {
    const userToken = getState().session.userToken;
    const backend_url =
      import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8000";
    try {
      const response = await fetch(`${backend_url}/accounts/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${userToken}`,
        },
      });

      const data = await response.json();

      if (data.ok) {
        localStorage.removeItem("rosewareAuthToken");
        return {}; // You can return anything here, since you don't need a result.
      } else {
        return rejectWithValue("Failed to log out.");
      }
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);
