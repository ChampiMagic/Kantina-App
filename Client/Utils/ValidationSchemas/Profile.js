import * as yup from 'yup';


export const profileValidationSchema = yup.object().shape({
    name: yup
    .string()
    .min(5, 'Name too short!')
    .max(1000, 'Name too long!')
    .required('Name is required'),
    date: yup
    .date()
})