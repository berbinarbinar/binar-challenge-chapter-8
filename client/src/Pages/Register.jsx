import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import './css/form.css';

const validationSchema = yup.object({
    userName: yup.string().required("Username is required"),
    email: yup.string().email("Enter valid email").required("Email is Required"),
    password: yup.string().required("Must enter a password")
})

function Register (){
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: ""
        },
        onSubmit: (values) =>{
            console.log(JSON.stringify(values))
        },
        validationSchema: validationSchema
    });

    return (
        <div className='Register'>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                id="userName"
                name="userName"
                label="Username"
                margin='normal'
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
                helperText={formik.touched.userName && formik.errors.userName}
                />
                <TextField
                id="email"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                />
                <Button variant="outlined">Submit</Button>
            </form>
        </div>
    )
}

export default Register;