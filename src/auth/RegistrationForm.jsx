import { useReducer, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../components/UI/Input';
import store from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { validateField } from '../utils/validateField';
import { createNewUser } from '../redux/slices/sessionSlice'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  passwordAgain: '',
  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  passwordValid: false,
  passwordAgainValid: false,
  firstNameTouched: false,
  lastNameTouched: false,
  emailTouched: false,
  phoneTouched: false,
  passwordTouched: false,
  passwordAgainTouched: false,
  formValid: false,
  hasError: false,
  errorMessage: ''
};

const phoneUtil = PhoneNumberUtil.getInstance();
const PNF = PhoneNumberFormat;

function reducer(state, action) {
  switch (action.type) {
    case 'PHONE_CHANGED':
      const phoneInput = action.value;
      console.log('Phone: ' + phoneInput);
      return { ...state, phone: phoneInput };
    case 'FIRSTNAME_VALID':
      const firstNameIsValid =
        action.value.trim().length > 0 && action.value.trim().length < 20;
      console.log(firstNameIsValid);
      return { ...state, firstNameValid: firstNameIsValid };
    case 'LASTNAME_VALID':
      const lastNameIsValid =
        action.value.trim().length > 0 && action.value.trim().length < 20;
      console.log(lastNameIsValid);
      return { ...state, lastNameValid: lastNameIsValid };
    case 'EMAIL_VALID':
      console.log(validateField('email', action.value));
      const emailIsValid = validateField('email', action.value);
      console.log(emailIsValid);
      return { ...state, emailValid: emailIsValid };
    case 'PHONE_VALID':
      const phoneIsValid =
        action.value.trim().length > 0 && action.value.trim().length < 20;
      return { ...state, phoneValid: phoneIsValid };
    case 'PASSWORD_VALID':
      const passwordIsValid =
        action.value.trim().length > 0 && action.value.trim().length < 20;
      return { ...state, passwordValid: passwordIsValid };
    case 'PASSWORDAGAIN_VALID':
      const passwordAgainIsValid =
        action.value.trim().length > 0 && action.value.trim().length < 20;
      return { ...state, passwordAgainValid: passwordAgainIsValid };
    case 'SET_FIELD_TOUCHED_TRUE':
      return { ...state, [action.field]: true };
    case 'SET_ERROR':
      return { ...state, hasError: action.hasError, errorMessage: action.message };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function RegisterForm() {
  const [state, localDispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordAgainRef = useRef(null);
  const emailRef = useRef(null);

  const handlePhoneChange = () => {
    const phone = phoneRef.current.value;
    localDispatch({ type: 'PHONE_CHANGED', value: phone });
  };

  const handleFirstNameBlur = () => {
    const firstName = firstNameRef.current.value;
    localDispatch({ type: 'SET_FIELD_TOUCHED_TRUE', field: 'firstNameTouched' });
    localDispatch({ type: 'FIRSTNAME_VALID', value: firstName });
  };

  const handleLastNameBlur = () => {
    const lastName = lastNameRef.current.value;
    localDispatch({ type: 'SET_FIELD_TOUCHED_TRUE', field: 'lastNameTouched' });
    localDispatch({ type: 'LASTNAME_VALID', value: lastName });
  };

  const handleEmailBlur = () => {
    const email = emailRef.current.value;
    localDispatch({ type: 'SET_FIELD_TOUCHED_TRUE', field: 'emailTouched' });
    localDispatch({ type: 'EMAIL_VALID', value: email });
  };

  const handlePhoneBlur = () => {
    const phone = phoneRef.current.value;
    const number = phoneUtil.parseAndKeepRawInput(phone, 'US');
    const formattedPhoneNumber = phoneUtil.format(number, PNF.NATIONAL);
    localDispatch({ type: 'PHONE_CHANGED', value: formattedPhoneNumber });
    localDispatch({ type: 'SET_FIELD_TOUCHED_TRUE', field: 'phoneTouched' });
    localDispatch({ type: 'PHONE_VALID', value: phone });
  };

  const handlePasswordBlur = () => {
    const password = passwordRef.current.value;
    localDispatch({ type: 'SET_FIELD_TOUCHED_TRUE', field: 'passwordTouched' });
    localDispatch({ type: 'PASSWORD_VALID', value: password });
  };

  const handlePasswordAgainBlur = () => {
    const passwordAgain = passwordAgainRef.current.value;
    localDispatch({ type: 'SET_FIELD_TOUCHED_TRUE', field: 'passwordAgainTouched' });
    localDispatch({ type: 'PASSWORDAGAIN_VALID', value: passwordAgain });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
  
    const formIsValid =
      state.emailValid &&
      state.passwordValid &&
      state.passwordAgainValid &&
      state.firstNameValid &&
      state.lastNameValid &&
      state.phoneValid &&
      state.password === state.passwordAgain;
  
    if (formIsValid) {
      const info = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phone: phone,
      };
      dispatch(createNewUser(info))
        .then((result) => {
          if (result.meta.requestStatus === 'fulfilled') {
            navigate('/dashboard');
          } else {
            localDispatch({ type: 'SET_ERROR', hasError: true, errorMessage: result.error });
          }
        })
        .catch((error) => {
          localDispatch({ type: 'SET_ERROR', hasError: true, errorMessage: error });
        });
    } else {
      localDispatch({ type: 'SET_ERROR', hasError: true, errorMessage: 'Please fill out all fields.' });
    }
  };

  return (
    <div className='space-y-10 divide-y divide-gray-900/10'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3'>
        <div className='px-4 sm:px-0'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Personal Information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            We'll never sell or give out your data.
          </p>
          <br />
          <p className='text-red-600'>{state.errorMessage}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2'
        >
          <div className='px-4 py-6 sm:p-8'>
            <div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <label
                  htmlFor='first_name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  First Name:
                </label>
                <div className='mt-2'>
                  <Input
                    className={
                      !state.firstNameValid &&
                      state.firstNameTouched &&
                      'bg-red-100'
                    }
                    onBlur={handleFirstNameBlur}
                    ref={firstNameRef}
                    type='text'
                    name='first_name'
                    id='first_name'
                    autoComplete='first_name'
                    placeholder='John'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='last_name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Last Name:
                </label>
                <div className='mt-2'>
                  <Input
                    onBlur={handleLastNameBlur}
                    ref={lastNameRef}
                    type='text'
                    name='last_name'
                    id='last_name'
                    autoComplete='last_name'
                    placeholder='Doe'
                    className={
                      !state.lastNameValid &&
                      state.lastNameTouched &&
                      'bg-red-100'
                    }
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email address:
                </label>
                <div className='mt-2'>
                  <Input
                    onBlur={handleEmailBlur}
                    ref={emailRef}
                    id='email'
                    name='email'
                    type='text'
                    autoComplete='email'
                    placeholder='your@email.com'
                    className={
                      !state.emailValid && state.emailTouched && 'bg-red-100'
                    }
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Phone Number
                </label>
                <div className='relative mt-2 rounded-md shadow-sm'>
                  <Input
                    onChange={handlePhoneChange}
                    value={state.phone}
                    onBlur={handlePhoneBlur}
                    ref={phoneRef}
                    type='tel'
                    name='phone-number'
                    id='phone-number'
                    className={
                      !state.phoneValid && state.phoneTouched && 'bg-red-100'
                    }
                    placeholder='+1 (555) 987-6543'
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password:
                </label>
                <div className='mt-2'>
                  <Input
                    onBlur={handlePasswordBlur}
                    ref={passwordRef}
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='password'
                    placeholder='********'
                    className={`${
                      !state.passwordValid &&
                      state.passwordTouched &&
                      'bg-red-100'
                    } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <label
                  htmlFor='password-again'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password Again:
                </label>
                <div className='mt-2'>
                  <Input
                    onBlur={handlePasswordAgainBlur}
                    ref={passwordAgainRef}
                    id='password-again'
                    name='password-again'
                    type='password'
                    autoComplete='password'
                    placeholder='********'
                    className={`${
                      !state.passwordAgainValid &&
                      state.passwordAgainTouched &&
                      'bg-red-100'
                    } block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
