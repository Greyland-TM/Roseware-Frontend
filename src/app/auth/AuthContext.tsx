"use client";
import React, { ReactNode, createContext, useEffect, useReducer } from "react";
import { validateUser } from "./utils";
import Cookies from "js-cookie";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
  phone_number: string;
  package_plans: Array<any>;
  organization: Object;
  has_synced_pipedrive: boolean;
  has_synced_stripe: boolean;
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
    phone_number: "",
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
  let data;

  switch (action.type) {
    case "SETUSER":
      data = action.payload;
      return {
        ...state,
        user: data.customer,
        token: data.token,
        isLoggedIn: data.ok,
      };

    case "LOGIN":
      data = action.payload;
      return {
        ...state,
        user: data.user,
        token: data.token,
        isLoggedIn: true,
      };

    case "LOGOUT":
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

let isInit: boolean = false;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!isInit) {
      isInit = true;
      const token = Cookies.get("token");
      if (token) {
        validateUser(token).then((res) => {
          dispatch({ type: "SETUSER", payload: res });
        });
      }
    }
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
