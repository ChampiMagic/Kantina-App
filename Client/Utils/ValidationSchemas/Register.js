import * as yup from 'yup';


export const registerValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email()
    .required('E-mail is requiered'),
    name: yup
    .string()
    .min(5, 'Too short!')
    .max(1000, 'Too long!')
    .required('Name must be provided'),
    password: yup
    .string()
    .min(5, 'Too short!')
    .max(1000, 'Too long!')
    .required('Password is requiered'),
    passwordConfirmation: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], `Your passwords don't match.`),
    isStuden: yup
    .boolean()
})