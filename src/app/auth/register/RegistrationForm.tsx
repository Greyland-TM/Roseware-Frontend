"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { registerNewUser } from "../utils";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const ctx = useContext(AuthContext);
  const dispatch = ctx.dispatch;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .label("First Name")
        .required("Please provide a first name"),
      lastName: Yup.string()
        .label("Last Name")
        .required("Please provide a last name"),
      phone: Yup.string().label("Phone"),
      email: Yup.string()
        .email()
        .required("Please provide a valid email address"),
      password: Yup.string().required("Please provide a valid password"),
      passwordRepeat: Yup.string()
        .label("Repeat Password")
        .required()
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        phone: values.phone,
        status: "customer",
      };
      const newUserResponse = await registerNewUser(data);
      if (newUserResponse.token) {
        dispatch({ type: "LOGIN", payload: data });
        router.push("/dashboard");
      }
    },
  });

  return (
    <div className="min-h-custom space-y-10 divide-y divide-gray-900/10 w-full flex items-center justify-center">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 max-w-xs">
            Once you save this form, you will be redirected to your dashboard.
            Where you can request a new project, or subscribe to one of our
            tools!
          </p>
          <br />
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
        >
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder=""
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className={`${
                      formik.touched.firstName && formik.errors.firstName
                        ? "border-red-400"
                        : "border-gray-300"
                    } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <span className="text-red-400">
                      {formik.errors.firstName}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className={`${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-red-400"
                        : "border-gray-300"
                    } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <span className="text-red-400">
                      {formik.errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className={`${
                      formik.touched.email && formik.errors.email
                        ? "border-red-400"
                        : "border-gray-300"
                    } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-400">{formik.errors.email}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className={`${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-400"
                        : "border-gray-300"
                    } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <span className="text-red-400">{formik.errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
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
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="tel"
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

              <div className="sm:col-span-4">
                <label
                  htmlFor="passwordRepeat"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password Repeat
                </label>
                <div className="mt-2.5">
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.passwordRepeat}
                    type="password"
                    name="passwordRepeat"
                    id="passwordRepeat"
                    autoComplete="tel"
                    className={`${
                      formik.touched.passwordRepeat &&
                      formik.errors.passwordRepeat
                        ? "border-red-400"
                        : "border-gray-300"
                    } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6`}
                  />
                  {formik.touched.passwordRepeat &&
                    formik.errors.passwordRepeat && (
                      <span className="text-red-400">
                        {formik.errors.passwordRepeat}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="rounded-md bg-Vine-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-Vine-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              {!formik.isSubmitting ? (
                "Save"
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
    </div>
  );
}
