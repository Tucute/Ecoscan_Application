import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Name must be at least 5 characters!')
    .max(12, 'Name must have a maximum of 20 characters!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Passwords must be at least 6 characters!')
    .max(25, 'Password must have a maximum of 20 characters!')
    .required('Required'),
});
