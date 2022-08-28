import * as yup from 'yup';


export const profileValidationSchema = yup.object().shape({
    name: yup
    .string()
    .min(5, 'Too short!')
    .max(1000, 'Too long!')
    .required('name is required'),
    date: yup
    .date()
})