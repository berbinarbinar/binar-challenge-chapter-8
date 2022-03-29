import { Card, CardContent, CardMedia, Grid, Typography, TextField, Button} from "@mui/material";
import { useFormik } from 'formik'
import { userValidationScheme } from "../utils/validationSchema";

export default function Register() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            experience: ''
        },
        onSubmit: (values) => {
            console.log(values, 'User is Registered');
        },
        validationSchema: userValidationScheme
    })

    return (
        <>
        <Grid container justifyContent={'center'} marginTop={'50px'} >
            <Card sx={{ maxWidth: 350}}>
                <CardMedia />
                <CardContent>
                    <Typography gutterBottom variant='h3' component={'h4'} paddingTop={'10px'}>
                        Register
                    </Typography>

                    <Typography variant="body2" color={'text.secondary'}>
                        Please input the required data
                    </Typography>

                    <br></br>

                    <Grid paddingLeft={'20px'} paddingRight={'20px'} >
                        <form onSubmit={formik.handleSubmit}>
                            <Grid item marginY={2}>
                                <TextField 
                                    id='username' 
                                    name='username' 
                                    label='Username'
                                    required
                                    
                                    // Value Handle
                                    value={formik.values.username}
                                    onChange={formik.handleChange}

                                    // Throw Error
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                            </Grid>

                            <Grid item marginY={2}>
                                <TextField 
                                    id='email' 
                                    name='email' 
                                    label='Email'
                                    required
                                    
                                    // Value Handle
                                    value={formik.values.email}
                                    onChange={formik.handleChange}

                                    // Throw Error
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>

                            <Grid item marginY={2}>
                                <TextField 
                                    id='password' 
                                    name='password' 
                                    label='Password'
                                    required
                                    
                                    // Value Handle
                                    value={formik.values.password}
                                    onChange={formik.handleChange}

                                    // Throw Error
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            
                            <Grid item marginY={2}>
                                <TextField 
                                    id='experience' 
                                    name='experience' 
                                    label='Experience'
                                    required
                                    
                                    // Value Handle
                                    value={formik.values.experience}
                                    onChange={formik.handleChange}

                                    // Throw Error
                                    error={formik.touched.experience && Boolean(formik.errors.experience)}
                                    helperText={formik.touched.experience && formik.errors.experience}
                                />
                            </Grid>
                            
                            <Grid item marginY={2}>
                                <Button variant="contained" type="submit">Submit</Button>
                            </Grid>
                        </form>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
        </>
    )
}