import { Avatar, 
    Button, 
    Checkbox, 
    FormControl, 
    FormControlLabel, 
    FormGroup, 
    FormLabel, 
    Grid, 
    Paper, 
    Radio, 
    RadioGroup, 
    TextField, 
    Typography } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


const Signup = () => {
    const paperStyle = {
        p: "30px 20px",
        height: '74vh',
        width: 300,
        m: '0 auto'
    }
    const avatarStyle = {
        bgcolor: '#1bbd7e'
    }
    const marginTop = {
        mt: 2
    }
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const onSubmit = (values,props) => {
        console.log(values);
        console.log(props);

        setTimeout(()=>{
            props.resetForm();
            props.setSubmitting(false);
        },2000);
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "too short").required("Required"),
        email: Yup.string().email("please enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male","female"],"Required").required(),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Required"),
        password: Yup.string().min(8,"Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"],"Accept terms & conditions")
    })


    return (
        <Grid>
            <Paper sx={paperStyle}>
                <Grid align="center">
                    <Avatar sx={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <Typography variant="h4" component="h4">
                        Sign Up
                    </Typography>
                    <Typography variant="caption">
                        Please fill this form to create an account !
                    </Typography>
                </Grid>
                <Formik 
                    initialValues={initialValues} 
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                                <Field as={TextField} name="name" label="Name" placeholder="Name" variant="standard" fullWidth 
                                    helperText={<ErrorMessage name="name"/>}/>
                                <Field as={TextField} name="email" label="Email" placeholder="Email" variant="standard" fullWidth 
                                    helperText={<ErrorMessage name="email"/>}/>
                                <FormControl sx={marginTop}>
                                    <FormLabel>Gender</FormLabel>
                                    <Field as={RadioGroup}
                                        name="gender"
                                        defaultValue="female"
                                        row                                        
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </Field>
                                </FormControl>
                                <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
                                <Field as={TextField} label="Phone Number" name="phoneNumber" placeholder="Phone Number" variant="standard" fullWidth 
                                    helperText={<ErrorMessage name="phoneNumber"/>}/>
                                <Field as={TextField} label="Password" name="password" type="password" placeholder="Password" variant="standard" fullWidth 
                                    helperText={<ErrorMessage name="password"/>}/>
                                <Field as={TextField} label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm Password" variant="standard" fullWidth 
                                    helperText={<ErrorMessage name="confirmPassword"/>}/>
                                <FormGroup sx={marginTop}>
                                    <FormControlLabel control={<Field as={Checkbox} name="termsAndConditions" />} label="I accept the terms and conditions." />
                                    <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
                                </FormGroup>
                                <Button type="submit" color="primary" variant="contained" 
                                    disabled={props.isSubmitting} sx={marginTop}>{props.isSubmitting ? "Loading..." : "Sign up" }</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Signup;