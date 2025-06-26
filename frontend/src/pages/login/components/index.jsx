
import { useDispatch, useSelector, } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router";
import { login } from "../../../store/thunk/authThunk";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Alert,
    CircularProgress,
} from "@mui/material";

import styles from './login.module.css';


function Login() {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Enter your email!'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Enter the password!')
    });

    const { loading, error } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (value, { setSubmitting }) => {
        const result = await dispatch(login( value ))
        if (result.meta.requestStatus === 'fulfilled') {
            navigate(from, { replace: true })
        }
        setSubmitting(false);
    }

    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            minHeight="100vh"
        >
            <Box
                flex={1}
                bgcolor="#64c8af"
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={4}
                minHeight={{ xs: '30vh', md: '100vh' }}
            >
                <Typography
                    variant="h3"
                    color="white"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize={{ xs: "2rem", md: "3rem" }}
                >
                    BOOKING.COM
                </Typography>
            </Box>

            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={4}
                minHeight={{ xs: '70vh', md: '100vh' }}
            >
                <Paper elevation={3} sx={{ padding: { xs: 2, md: 4 }, width: { xs: '100%', sm: 400 } }}>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Login to your account
                    </Typography>


                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>
                                <Field
                                    as={TextField}
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    margin="normal"
                                    helperText={<ErrorMessage name="email" component="span" className={styles.error_message} />}
                                />

                                <Field
                                    as={TextField}
                                    label="Password"
                                    name="password"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    helperText={<ErrorMessage name="password" component="span" className={styles.error_message} />}
                                />

                                {error && (
                                    <Alert severity="error" sx={{ mt: 2 }}>
                                        {error}
                                    </Alert>
                                )}

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3, background: '#64c8af' }}
                                    disabled={isSubmitting || loading}
                                >
                                    {loading ? <CircularProgress size={24} /> : 'Log in'}
                                </Button>
                            </Form>
                        )}

                    </Formik>

                    <Box mt={2} textAlign="center">
                        <Link
                            className={styles.link}
                            to="/signup"
                            style={{ fontSize: "14px", cursor: "pointer" }}
                        >
                            Already registered? — Register
                        </Link>

                    </Box>
                </Paper>
            </Box>
        </Box>

    );
}

export default Login;