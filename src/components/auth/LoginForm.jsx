// The login form handles Logging in an existing user and creating a new one
// Once a user is logged in a JWT is returned from the server and stored
// in the local app context and in the browser local storage.

import React from "react";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import Modal from "../Modal";
import { ThreeDots } from "react-loader-spinner";
import {handleLogin} from "../../redux/slices/sessionSlice";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function LoginForm({ overlayClicked, pipedriveOuthCode }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOverlayClicked = () => {
    overlayClicked();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please provide a valid username"),
      password: Yup.string().required("Please provide a valid password")
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setSubmitting(true);

      const body = {
        username: values.username,
        password: values.password,
      };
      
      try {
        const result = await dispatch(handleLogin(body));

        if (result.meta.requestStatus === "fulfilled") {
          navigate(`/dashboard${pipedriveOuthCode ? `/integrations?code=${pipedriveOuthCode}` : ""}`);
          overlayClicked();
        } else {
          setErrors({ form: result.payload });
        }
      } catch (error) {
        setErrors({ form: error.payload });
      } finally {
        setSubmitting(false);
      }
    }
  });

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
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      placeholder=""
                      type="text"
                      name="username"
                      id="username"
                      className={`${
                        formik.touched.username && formik.errors.username
                          ? "border-red-400"
                          : "border-gray-300"
                      } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    />
                    {formik.touched.username && formik.errors.username && (
                      <span className="text-red-400">{formik.errors.username}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder=""
                      type="password"
                      name="password"
                      id="password"
                      className={`${
                        formik.touched.password && formik.errors.password
                          ? "border-red-400"
                          : "border-gray-300"
                      } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <span className="text-red-400">{formik.errors.password}</span>
                    )}
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
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    {!formik.isSubmitting ? "Sign in" : (
                      <ThreeDots 
                        height="20%" 
                        radius="2"
                        color="#ffffff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    )}
                  </button>
                </div>

                {formik.errors.form && (
                  <div className="text-red-400">
                    {formik.errors.form}
                  </div>
                )}
              </form>
            </div>

            <p className="mt-2 text-center w-full text-sm text-gray-500">
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
