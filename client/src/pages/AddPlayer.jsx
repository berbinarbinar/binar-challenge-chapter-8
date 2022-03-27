import { Button, Paper } from "@mui/material";
import {Formik, Form} from 'formik'
import { useNavigate } from "react-router-dom";
import { TextInput } from "../components/CustomInput";
import validationSchema from "../utils/validation";

export default function AddPlayer() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        navigate('/', {state: {...values, action: 'add'}, replace: true})
      }}
    >
      <Paper
        component={Form}
        elevation={10}
        sx={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          p:1,
          mt: 10,
          mx: 'auto',
          '& .MuiTextField-root': { my: 1, width: '100%'},
        }}
      >
        <TextInput 
          id='username'
          name='username'
          label='Username'
        />
        <TextInput 
          id='email'
          name='email'
          label='Email'
        />
        <TextInput 
          id='password'
          name='password'
          label='Password'
          type='password'
          helperText='min 8 char, mengandung angka, huruf besar & kecil'
        />
        <Button type="submit" color="info" variant="contained">ADD PLAYER</Button>
      </Paper>
    </Formik>
  )
}