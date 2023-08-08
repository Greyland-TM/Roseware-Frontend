import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function PaymentInfoForm() {
  const { user } = useSelector((state) => state.session);

  const formik = useFormik({
    initialValues: {
      holderName: '',
      cardNumber: '',
      expireDate: '',
      cvc: '',
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
    <div className='mx-auto w-full p-5 rounded-lg shadow-md relative h-fit overflow-hidden'>
      {/* The overlay to show the card is not available */}
      {!user.beta_feature_flag && (
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <span className="text-white text-lg">Coming Soon</span>
        </div>
      )}
      <form onSubmit={formik.handleSubmit} className="md:col-span-2">
        <div className="mb-6 flex align-middle">
          <div className="font-bold text-xl mb-6">Payment Details</div>
          <p className="text-md leading-relaxed">&nbsp;- ( Secured by Stripe )</p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Cardholder name
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
              Card number
            </label>
            <div className="mt-2">
              <input
                onChange={formik.handleChange}
                value={formik.values.phone}
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                className={`${formik.touched.phone && formik.errors.phone ? 'border-red-400' : 'border-gray-300'} block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
              {'Exp. Date (mm/yy)'}
            </label>
            <div className="flex gap-3">
              <div className="mt-2">
                <label htmlFor="month">{""}</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.month}
                  type="number
                  "
                  name="month"
                  id="month"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
              <label htmlFor="year">{""}</label>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.year}
                  type="number"
                  name="year"
                  id="year"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
              CVC
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
