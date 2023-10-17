import Cookies from "js-cookie";
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

// ──────────────────────────────────────────────
// Register New User

// ──────────────────────────────────────────────
export const registerNewUser = async (body: Object) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Send a POST request to create a new customer
    const response = await fetch(`${backend_url}/accounts/create-customer/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    // If token is received, save it to local storage and return data
    if (data.token) {
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
export const validateUser = async (token: RequestCookie | string | undefined) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

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
interface LoginBody {
  email: string,
  password: string,
}
export const loginUser = async (body: LoginBody) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log(body, backend_url)

    // Send a POST request to login the user and get token
    // console.log(body);
    // console.log(backend_url);
    const response = await fetch(`${backend_url}/accounts/login/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.token) {
      Cookies.set("token", data.token, { path: "" });
    }
    return data;
  } catch (error) {
    return error;
  }
};

// ──────────────────────────────────────────────
// Logout User
// ──────────────────────────────────────────────
export const logoutUser = async (token: RequestCookie | string | undefined | null) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Send a POST request to logout the user
    const response = await fetch(`${backend_url}/accounts/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    const data = await response.json();
    Cookies.remove("token");
    return data;
  } catch (error) {
    return error;
  }
};
