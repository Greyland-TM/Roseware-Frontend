import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AccountForm() {
  const { userEmail } = useSelector((state) => state.session);

  console.log(userEmail);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: userEmail,
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .label('First Name')
        .required(),
      lastName: Yup.string()
        .label('Last Name')
        .required(),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.string()
        .label('Phone'),
      password: Yup.string()
    }),
    onSubmit: function (values) {
      const data = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.phone,
        password: values.password,
      }
      console.log('Form submitted: ', data)
      alert(`Thanks for reaching out, ${values.firstName}! We'll be in touch soon.`);
    }
  });

  return (
    <div className='max-w-md rounded-xl overflow-hidden shadow-lg h-fit p-8'>
      <form className="md:col-span-2">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
        <div className="col-span-full flex items-center gap-x-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
            />
            <div>
              <button
                type="button"
                className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-white/20"
              >
                Change avatar
              </button>
              <p className="mt-2 text-xs leading-5 text-gray-800">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
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
                className={`${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'} block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {formik.touched.email && formik.errors.email && (
                <span className='text-red-400'>{formik.errors.email}</span>
              )}
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="current_password"
                type="phone"
                autoComplete="phone"
                className={`${formik.touched.firstName && formik.errors.firstName ? 'border-red-400' : 'border-gray-300'} block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
