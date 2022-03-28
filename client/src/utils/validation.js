import * as Yup from 'yup'

export const registerValidationSchema = Yup.object({
  fullName: Yup.string().min(3).max(25).required("Full name is required!"),
  email: Yup.string().email("FIlled in with email format").required("email is required"),
  userName: Yup.string().min(5).max(20).required("username is required"),
  password: Yup.string().min(8).max(20).required("password is required"),
  dob : Yup.date().required(),
  gender: Yup.string().required("Gender is required")
})

export const searchScheme = Yup.object({
  email: Yup.string().email("FIlled in with email format"),
  userName: Yup.string().min(5).max(20),
  level: Yup.number().positive("Must be more than 0").integer("Must be more than 0"),
  exp: Yup.number().positive("Must be more than 0").integer("Must be more than 0")
})

