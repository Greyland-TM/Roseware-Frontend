// ──────────────────────────────────────────────
// Register New User
// ──────────────────────────────────────────────
export const registerNewUser = async (body: Object) => {
  try {
    const backend_url = "http://127.0.0.1:8000";

    // Send a POST request to create a new customer
    const response = await fetch(`${backend_url}/accounts/create-customer/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    console.log(data);

    // If token is received, save it to local storage and return data
    if (data.token) {
      localStorage.setItem("rosewareAuthToken", data.token);
      return data;
    } else {
      console.log("No Token Received");
    }
  } catch (error) {
    return error;
  }
};

// ──────────────────────────────────────────────
// Validate User
// ──────────────────────────────────────────────
export const validateUser = async (token: string | null) => {
  try {
    const backend_url = "http://127.0.0.1:8000";

    // Send a GET request to validate the user based on provided token
    const response = await fetch(`${backend_url}/accounts/customer/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// ──────────────────────────────────────────────
// Login User
// ──────────────────────────────────────────────
export const loginUser = async (body: Object) => {
  try {
    const backend_url = "http://127.0.0.1:8000";

    // Send a POST request to login the user and get token
    const response = await fetch(`${backend_url}/accounts/login/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// ──────────────────────────────────────────────
// Logout User
// ──────────────────────────────────────────────
export const logoutUser = async (token: string | null) => {
  try {
    const backend_url = "http://127.0.0.1:8000";

    // Send a POST request to logout the user
    const response = await fetch(`${backend_url}/accounts/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
