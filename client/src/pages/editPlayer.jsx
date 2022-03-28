import { Link } from 'react-router-dom';
import { Button, Card, TextField, Grid } from "@mui/material";
import { useFormik} from 'formik';
import * as yup from 'yup';

const editPlayerValidationSchema = yup.object({
    username: yup.string().required("Username is required!"),
    email: yup.string().required("Email is required!"),
    exp: yup.number().required("Experience is required!"),
    lvl: yup.number().required("Level is required!"),
    password: yup.string().required("Password is required!").min(8),
  })

export function EditPlayer(){

    const formik = useFormik({
        initialValues:{
          username: "",
          email: "",
          exp: "",
          lvl: "",
          password: ""
        },
        onSubmit: (values) => {
          console.log(values)
        },
        validationSchema: editPlayerValidationSchema
      })

    return(
        <>
            
            <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column" mt={25}> 
            <h2>Edit Player</h2>
            <Grid container direction="row" mb={1}>
                <Grid item>
                    <Card> 
                        <Grid item m={1}>
                            <TextField 
                            id="username"
                            name="username" 
                            label="Username" 
                            sx={{ width: 350 }}
                            variant="outlined" 
                            size="small"
                            type="text"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.username && Boolean(formik.errors.username)
                            }
                            helperText={
                                formik.touched.username && formik.errors.username
                            }
                            />
                        </Grid>
                    </Card>
                </Grid>
                <Grid item ml={2}>
                    <Card> 
                        <Grid item m={1}>
                            <TextField 
                            id="email" 
                            name="email"
                            label="Email" 
                            sx={{ width: 350 }}
                            variant="outlined" 
                            size="small"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email && Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                            />
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction="row" mb={1}>
                <Grid item>
                    <Card> 
                        <Grid item m={1}>
                            <TextField 
                            id="exp"
                            name="exp" 
                            label="Experience" 
                            sx={{ width: 163 }}
                            variant="outlined" 
                            size="small"
                            type="number"
                            value={formik.values.exp}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.exp && Boolean(formik.errors.exp)
                            }
                            helperText={
                                formik.touched.exp && formik.errors.exp
                            }
                            />
                        </Grid>
                    </Card>
                </Grid>
                <Grid item ml={1}>
                    <Card> 
                        <Grid item m={1}>
                            <TextField 
                            id="lvl"
                            name="lvl" 
                            label="Level" 
                            sx={{ width: 163 }}
                            variant="outlined" 
                            size="small"
                            type="number"
                            value={formik.values.lvl}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.lvl && Boolean(formik.errors.lvl)
                            }
                            helperText={
                                formik.touched.lvl && formik.errors.lvl
                            }
                            />
                        </Grid>
                    </Card>
                </Grid>
                <Grid item ml={2}>
                    <Card> 
                        <Grid item m={1}>
                            <TextField 
                            id="password" 
                            name="password"
                            label="Password" 
                            sx={{ width: 350 }}
                            variant="outlined" 
                            size="small"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.password && Boolean(formik.errors.password)
                            }
                            helperText={
                              formik.touched.password && formik.errors.password
                            }
                            />
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Grid container direction="row" mt={1}>
              <Grid item>
                <Button type="submit" variant="contained" color="success">Submit</Button>
              </Grid>
              <Grid item ml={1}>
                <Link to='/' style={{ textDecoration: 'none' }}> <Button variant="contained" color="warning">
                    Back
                </Button></Link>
              </Grid>
            </Grid>
            </Grid>
            </form>
           
        </>
    )
}