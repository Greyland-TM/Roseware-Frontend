"use client";
import React, { ReactNode, createContext, useEffect, useReducer } from "react";
import { logoutUser, validateUser } from "./utils";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  phoneNumber: string;
  package_plans: Array<any>;
  organization: Object;
  has_synced_pipedrive: false;
  has_synced_stripe: false;
};

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  dispatch: React.Dispatch<Action>;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: AuthState = {
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
  token: null,
  isLoggedIn: false,
  dispatch: () => {},
};

const reducer = (state: AuthState, action: Action) => {
  let data, token, user;

  switch (action.type) {
    case "SETUSER":
      data = action.payload;
      token = data.token;
      user = data.user;
      if (data.ok) {
        return {
          ...state,
          user: user,
          token: token,
          isLoggedIn: true,
        };
      } else
        return {
          ...state,
          user: null,
          token: null,
          isLoggedIn: false,
        };

    case "LOGIN":
      data = action.payload;
      token = data.token;
      user = data.user;
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      return {
        ...state,
        user: user,
        token: token,
        isLoggedIn: true,
      };

    case "LOGOUT":
      token = state.token;
      logoutUser(token);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    validateUser(token).then((res) => {
      dispatch({ type: "SETUSER", payload: res });
    });
  }, []);

  const authContextValue = {
    user: state.user,
    token: state.token,
    isLoggedIn: state.isLoggedIn,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
