import * as Yup from 'yup'

const validationSchema = Yup.object({
  username: Yup.string()
    .max(20, 'harus kurang dari 21 karakter')
    .matches(/^[A-Za-z0-9]+$/, 'huruf dan angka saja')
    .required('wajib di isi'),
  email: Yup.string()
    .email('email tidak valid')
    .required('wajib di isi'),
  password: Yup.string()
    .min(8, 'minimal 8 karakter')
    .matches(/[a-z]/, 'minimal 1 huruf kecil')
    .matches(/[A-Z]/, 'minimal 1 huruf besar')
    .matches(/\d/, 'minimal 1 angka')
    .required('wajib di isi')
})

export default validationSchema;