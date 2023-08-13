import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {createNewUser as createNewLead} from "../../../redux/slices/sessionSlice";
import {useNavigate} from "react-router-dom";

export default function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().label("First Name").required(),
      lastName: Yup.string().label("Last Name").required(),
      email: Yup.string().email().required(),
      phone: Yup.string().label("Phone"),
      message: Yup.string(),
    }),
    onSubmit: function (values) {
      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.phone,
        status: "lead",
      };
      alert(
        `Thanks for reaching out, ${values.firstName}! We'll be in touch soon.`
      );
      dispatch(createNewLead(data));
      navigate(`/`);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className={`${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-400"
                    : "border-gray-300"
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <span className="text-red-400">{formik.errors.firstName}</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900">
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
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <span className="text-red-400">{formik.errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900">
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
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400">{formik.errors.email}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900">
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
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <span className="text-red-400">{formik.errors.phone}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={formik.handleChange}
                value={formik.values.message}
                name="message"
                id="message"
                rows={4}
                className={`${
                  formik.touched.message && formik.errors.message
                    ? "border-red-400"
                    : "border-gray-300"
                } block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
            {formik.touched.message && formik.errors.message && (
              <span className="text-red-400">{formik.errors.message}</span>
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}
