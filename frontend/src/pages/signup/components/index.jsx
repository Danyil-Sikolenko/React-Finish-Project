import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { signUp } from "../../../store/thunk/authThunk";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";

import styles from "./signup.module.css";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name!"),
    email: Yup.string().email("Invalid email").required("Enter your email!"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Enter the password!"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (values, { setSubmitting }) => {
    const result = await dispatch(signUp(values));
    if (result.meta.requestStatus === "fulfilled") {
      navigate("/login", { replace: true });
    }
    setSubmitting(false);
  };

  return (
   <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      minHeight="100vh"
    >
      <Box
        flex={1}
        bgcolor="#64c8af"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={4}
      >
        <Typography
          variant="h3"
          color="white"
          fontWeight="bold"
          textAlign="center"
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
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: { xs: 2, md: 4 },
            width: { xs: "100%", sm: 400 },
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            Create a new account
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  helperText={
                    <ErrorMessage
                      name="name"
                      component="span"
                      className={styles.error_message}
                    />
                  }
                />

                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  fullWidth
                  margin="normal"
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className={styles.error_message}
                    />
                  }
                />

                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  helperText={
                    <ErrorMessage
                      name="password"
                      component="span"
                      className={styles.error_message}
                    />
                  }
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
                  sx={{ mt: 3, background: "#64c8af" }}
                  disabled={isSubmitting || loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Sign-Up"}
                </Button>
              </Form>
            )}
          </Formik>

          <Box mt={2} textAlign="center">
            <Link to="/login" className={styles.link}>
              Already have an account?
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;