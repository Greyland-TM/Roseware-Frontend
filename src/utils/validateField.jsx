import * as Yup from 'yup';

export const validateField = (name, value) => {
  let validationSchema;

  switch (name) {
    case 'phone':
      validationSchema = Yup.string();

      break;
    case 'email':
      validationSchema = Yup.string()
        .email('Invalid email')
        .required('Required');
      break;
    case 'password':
      validationSchema = Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .required('Required');
      break;
    case 'passwordAgain':
      validationSchema = Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .min(8, 'Password must be at least 8 characters')
        .required('Required');
      break;
    default:
      return false;
  }

  try {
    validationSchema.validateSync(value);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
