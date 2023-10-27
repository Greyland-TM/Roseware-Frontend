import Cookies from "js-cookie";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

// ──────────────────────────────────────────────
// Register New User
// ──────────────────────────────────────────────
export const registerNewUser = async (body: Object) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Send a POST request to create a new customer
    const response = await fetch(`${backend_url}/accounts/create-customer/`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (data.token) {
      Cookies.set("token", data.token);
    }
    return data;
  } catch (error) {
    return error;
  }
};

// ──────────────────────────────────────────────
// Validate User
// ──────────────────────────────────────────────
export const validateUser = async (
  token: RequestCookie | string | undefined
) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Send a GET request to validate the user based on provided token
    const response = await fetch(`${backend_url}/accounts/customer/`, {
      cache: "no-store",
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
  email: string;
  password: string;
}
export const loginUser = async (body: LoginBody) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    // Send a POST request to login the user and get token
    const response = await fetch(`${backend_url}/accounts/login/`, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data.token) {
      Cookies.set("token", data.token);
    }
    return data;
  } catch (error) {
    return error;
  }
};

// ──────────────────────────────────────────────
// Logout User
// ──────────────────────────────────────────────
export const logoutUser = async (
  token: RequestCookie | string | undefined | null
) => {
  try {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    // Send a POST request to logout the user
    const response = await fetch(`${backend_url}/accounts/logout/`, {
      method: "POST",
      cache: "no-store",
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
