// The login form handles Logging in an existing user and creating a new one
// Once a user is logged in a JWT is returned from the server and stored
// in the local app context and in the browser local storage.

import React from "react";
import Link from "next/link";
import { ThreeDots } from "react-loader-spinner";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "./Utils";

interface loginFormProps { 
  closeModal: () => void;
  dispatch: React.Dispatch<any>;
}

export default function LoginForm({ closeModal, dispatch }: loginFormProps) { 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please provide a valid email"),
      password: Yup.string().required("Please provide a valid password"),
    }),
    onSubmit: async (values) => {
      const body = {
        email: values.email,
        password: values.password,
      }
      const data = await loginUser(body);
      dispatch({type: "LOGIN", payload: data})
    },
  });

  return (
    <div className="flex justify-center">
      <div className="fixed z-20 ">
        <div className="mt-10 sm:mt-20 lg:mt-52 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
            <div className="flex justify-center">
              <h1 className="font-extrabold text-4xl text-Black">Roseware</h1>
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center py-6 sm:px-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className=" mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      autoFocus
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder=""
                      type="text"
                      name="email"
                      id="loginEmail"
                      className={`${
                        formik.touched.email && formik.errors.email
                          ? "border-red-400"
                          : "border-gray-300"
                      } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className="text-red-400">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder=""
                      type="password"
                      name="password"
                      id="loginPassword"
                      className={`${
                        formik.touched.password && formik.errors.password
                          ? "border-red-400"
                          : "border-gray-300"
                      } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <span className="text-red-400">
                        {formik.errors.password}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-Vine px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  >
                    {!formik.isSubmitting ? (
                      "Sign in"
                    ) : (
                      <ThreeDots
                        height="20%"
                        radius="2"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        visible={true}
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-2 text-center w-full text-sm text-gray-500">
              Not a member?
              <Link
                href={`/auth/register`}
                onClick={closeModal}
                className="mx-1 font-semibold leading-6 text-rose-800 hover:text-rose-700"
              >
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
