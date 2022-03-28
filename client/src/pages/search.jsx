import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Box } from '@mui/material';
import { searchScheme } from '../utils/validation';
import { Button } from '@mui/material';


export const Search = () => {
    const formik = useFormik({
        initialValues: {
          userName: '',
          email: '',
          exp: '',
          level: ''
        },
        onSubmit: (values) => {
          console.log(values)},
        validationSchema: searchScheme
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
                <Typography variant="h4" sx ={{ mt : 3, textAlign:'center'}}> Search User </Typography>  
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
                    id="exp" 
                    name="exp" 
                    label="exp"
                    value={formik.values.exp}
                    onChange={formik.handleChange} 
                    error={formik.touched.exp && Boolean(formik.errors.exp)}
                    helperText={formik.touched.exp && formik.errors.exp} 
                    variant="outlined" 
                    sx ={{ width:'80ch', mt:2}}/>
                <TextField 
                    id="level" 
                    name="level" 
                    label="Level"
                    value={formik.values.level}
                    onChange={formik.handleChange} 
                    error={formik.touched.level && Boolean(formik.errors.level)}
                    helperText={formik.touched.level && formik.errors.level} 
                    variant="outlined" 
                    sx ={{ width:'80ch', mt:2}}/>
                <Button variant='contained' type='submit' sx ={{mt:3, ml:'280px'}}> Submit </Button>
            </form>
        </Box>
    </Container>
    )
}