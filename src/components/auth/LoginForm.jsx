// The login form handles Logging in an existing user and creating a new one
// Once a user is logged in a JWT is returned from the server and stored
// in the local app context and in the browser local storage.

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRef, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import Input from "../UI/Input";
import { handleLogin } from "../../redux/slices/sessionSlice";

export default function LoginForm({ overlayClicked, pipedriveOuthCode }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState(null);

  const handleOverlayClicked = () => {
    overlayClicked();
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(handleLogin(body))
      .then((result) => {
        console.log(result.payload);
        if (result.meta.requestStatus === "fulfilled") {
          setError(null);
          navigate(
            `/dashboard${
              pipedriveOuthCode ? `/integrations?code=${pipedriveOuthCode}` : ""
            }`
          );
          overlayClicked();
        } else if (
          result.payload ===
          "{'non_field_errors': [ErrorDetail(string='Incorrect Credentials', code='invalid')]}"
        ) {
          setError("Incorrect Email or Password");
        }
      })
      .catch((error) => {
        console.log("Got an error 3: ", error);
      });
  };

  return (
    <>
      <Modal overlayClicked={overlayClicked}>
        <div className="mt-52 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
            <div className="flex justify-center">
              <h1 className="font-extrabold text-4xl text-blue-700">
                Roseware
              </h1>
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center py-6 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className=" mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form className="space-y-6" onSubmit={formSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <Input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <Input
                      ref={passwordRef}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                    />
                  </div>
                </div>

                {/* <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember-me'
                      name='remember-me'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                    <label
                      htmlFor='remember-me'
                      className='ml-3 block text-sm leading-6 text-gray-900'
                    >
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm leading-6'>
                    <a
                      href='#'
                      className='font-semibold text-indigo-600 hover:text-indigo-500'
                    >
                      Forgot password?
                    </a>
                  </div>
                </div> */}
                <div>
                  <p className="text-sm text-red-500">{error}</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-2 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                to={`/register${
                  pipedriveOuthCode ? `?code=${pipedriveOuthCode}` : ""
                }`}
                onClick={handleOverlayClicked}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
