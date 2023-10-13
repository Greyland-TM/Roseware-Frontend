"use client";
import React, { Dispatch, ReactNode, createContext, useEffect, useReducer } from "react";
import { registerNewUser } from "./Utils";

interface AuthState {
  user: Object | null;
  token: string | null;
  dispatch: React.Dispatch<Action>;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: AuthState = {
  user: null,
  token: null,
  dispatch: () => {},
};

const reducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "REGISTER":
      console.log("CTX REGISTER", action.payload);
      // registerNewUser(action.payload);
      return {
        ...state,
      }
    case "SETUSER":
      const user = action.payload;
      const token = user.accessToken;
      return {
        ...state,
        user: user,
        token: token,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  const authContextValue = {
    user: state.user,
    token: state.token,
    dispatch,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
