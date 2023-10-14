"use client";
import React, {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import {registerNewUser, validateUser } from "./Utils";

interface AuthState {
  user: Object | null;
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
  switch (action.type) {
    case "SETUSER":
      const payload = action.payload;
      console.log(payload)
      const valToken = payload.token;
      const valUser =  payload.user;

      return {
        ...state,
        user: valUser,
        token: valToken,
        isLoggedIn: payload.ok,
      };
      
    case "LOGIN":
      const data = action.payload;
      const loginToken = data.token;
      const loginUser = data.user;
      localStorage.setItem("token", loginToken);

      return {
        ...state,
        user: loginUser,
        token: loginToken,
        isLoggedIn: true,
      };

    case "LOGOUT":
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
      dispatch({type: "SETUSER", payload: res})
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
