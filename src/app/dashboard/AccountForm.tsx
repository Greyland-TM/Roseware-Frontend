import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function AccountForm() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState<string | null>(null);
  const ctx = useContext(AuthContext);
  const dispatch = ctx.dispatch;
  const user = ctx.user;
  const token = ctx.token;

  useEffect(() => {
    formik.setValues({
      firstName: user?.first_name,
      lastName: user?.last_name,
      email: user?.email,
      phone: user?.phone_number,
    });
  }, [user]);

  const formik = useFormik({
    initialValues: {
      firstName: user?.first_name,
      lastName: user?.last_name,
      email: user?.email,
      phone: user?.phone_number,
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
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("first_name", values.firstName || "");
      formData.append("last_name", values.lastName || "");
      formData.append("email", values.email || "");
      formData.append("phone", values.phone || "");
      formData.append("pk", user?.id ? user.id.toString() : "");

      if (selectedFile) {
        formData.append("profile_picture", selectedFile);
      }
      
      const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(`${backend_url}/accounts/customer/`, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const data = await response.json();

      if (data.ok) {
        dispatch({
          type: "SETUSER",
          payload: data,
        });
      }
    },
  });

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const imageURL = URL.createObjectURL(file);
      setSelectedFileUrl(imageURL);
    }
  };

  return (
    <div className="max-w-lg rounded-xl overflow-hidden shadow-md h-fit p-6 m-18 mt-36 bg-white">
      <form onSubmit={formik.handleSubmit} className="md:col-span-2">
        <div className="mb-6 flex align-middle">
          <p className="font-bold text-xl leading-tight">Contact Details</p>
          {/* <p className="text-md leading-relaxed">&nbsp;- ( just for you so we know  )</p> */}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div className="col-span-full flex items-center gap-x-8">
            <Image
              className="inline-block h-28 w-28 rounded-full object-cover"
              src={
                selectedFileUrl
                  ? selectedFileUrl
                  : user?.profile_picture
                  ? user?.profile_picture
                  : "/default_profile_picture.jpg"
              }
              alt={user?.first_name ? user?.first_name : "profile Picture"}
              width="1400"
              height="1800"
            />
            <div>
              <input
                type="file"
                id="profileImageInput"
                hidden
                onChange={handleImageChange}
              />
              <button
                type="button"
                className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-white/20"
                onClick={() => {
                  const elem = document.getElementById("profileImageInput");
                  if (elem) elem.click();
                }}
              >
                Change avatar
              </button>
              <p className="mt-2 text-xs leading-5 text-gray-800">
                JPG, GIF or PNG. 1MB max.
              </p>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="givenName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                onChange={formik.handleChange}
                value={formik.values.lastName}
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="familyName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                autoComplete="email"
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "border-red-400"
                    : "border-gray-300"
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400">{formik.errors.email}</span>
              )}
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                onChange={formik.handleChange}
                value={formik.values.phone}
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                className={`${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-400"
                    : "border-gray-300"
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="rounded-md bg-Vine-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-Vine-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
