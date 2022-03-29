import * as Yup from 'yup';

export const userValidationScheme = Yup.object({
    username: Yup.string().min(3).max(25).required('Please Input Your WEIRD Nickname'),
    email: Yup.string().email().required('Please Input Your Mother Email'),
    password: Yup.string().min(4).required('Please Set Your Birthday as Password'),
    experience: Yup.number().required('Please Input Your Experience as Bullying Victim')
})