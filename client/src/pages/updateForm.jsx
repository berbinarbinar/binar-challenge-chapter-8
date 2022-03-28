import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel'


export const UpdateForm = () => {
    const formik = useFormik({
        initialValues: {
          fullName: '',
          email: '',
          userName: '',
          password: '',
          dob: '',
          gender: ''
        },
        onSubmit: (values) => {
          console.log(values)},
      });
    return (
        <Container maxWidth='sm'>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                }}>
                <form onSubmit={formik.handleSubmit}> 
                <Typography variant="h4" sx ={{ mt : 3, textAlign:'center'}}> Edit User</Typography>  
                <TextField 
                    id="fullName" 
                    name="fullName" 
                    label="Full Name" 
                    value={formik.values.fullName}  
                    onChange={formik.handleChange} 
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)} 
                    helperText={formik.touched.fullName && formik.errors.fullName} 
                    variant="outlined" 
                    sx ={{ width:'80ch', mt:2}}/>
                <TextField 
                    id="email" 
                    name="email" 
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange} 
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email} 
                    variant="outlined" 
                    sx ={{ width:'80ch', mt:2}}/>
                <TextField 
                    id="userName" 
                    name="userName" 
                    label="User name"
                    value={formik.values.userName}
                    onChange={formik.handleChange} 
                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                    helperText={formik.touched.userName && formik.errors.userName} 
                    variant="outlined" 
                    sx ={{ width:'80ch', mt:2}}/>
                <TextField 
                    id="password" 
                    name="password" 
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange} 
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password} 
                    variant="outlined" 
                    sx ={{ width:'80ch', mt:2}}/>
                <InputLabel id="dob" sx={{mt:2}}>Date of birth</InputLabel>
                <TextField
                    id='dob'
                    name='dob'
                    type='date'
                    onChange={formik.handleChange}
                    value={formik.values.dob}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                    helperText={formik.touched.dob && formik.errors.dob}
                    variant="outlined" 
                    sx ={{ width: "80ch", mt:2}}/>
                <InputLabel id="gender" sx={{mt:2}}>Gender</InputLabel>
                <RadioGroup
                    id='gender'
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    sx={{flexDirection: 'row'}}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
                <Button variant='contained' type='submit' sx ={{mt:3, ml:'280px'}}> Submit </Button>
            </form>
        </Box>
    </Container>
    )
}