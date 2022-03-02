import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


const Login = ({ handleChange }) => {
    const paperStyle = {
        p: "30px 20px",
        height: '76vh',
        width: 300,
        m: "0 auto"
    }

    const avatarStyle = {
        bgcolor: '#1bbd7e'
    }

    const buttonStyle = {
        m: "8px 0"
    }

    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(()=>{
            props.resetForm();
            props.setSubmitting(false);
        },2000);
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")

    })

    return (
        <Grid>
            <Paper sx={paperStyle}>
                <Grid align='center'>

                    <Avatar sx={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    {/* <Typography variant="h2" component="h2">
                    Sign in
                </Typography> */}
                    <h2>Sign In</h2>

                </Grid>
                <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            {console.log(props)}
                            <Field as={TextField} label="Username" name="username" placeholder="Enter your name" variant="standard" fullWidth required 
                            helperText={<ErrorMessage name="username" />}/>
                            <Field as={TextField} label="Password" name="password" placeholder="Enter your password" type="password" variant="standard" fullWidth required 
                            helperText={<ErrorMessage name="password" />}/>
                            <FormGroup>
                                <Field as={FormControlLabel}
                                    name="remember"
                                    control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    }
                                    label="Remember me" />
                            </FormGroup>
                            <Button type="submit" variant="contained" color="primary"
                                sx={buttonStyle}
                                fullWidth
                                disabled={props.isSubmitting}>
                                   {props.isSubmitting ? 'Loading...' : 'Sign in'}
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography>Do you have an account?
                    <Link href="#" onClick={() => handleChange("e", 1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;