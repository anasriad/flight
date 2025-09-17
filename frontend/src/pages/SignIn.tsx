import { Box, Container, Typography, TextField, Button, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleSignInMutation } from "../API/UserAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../States/UserSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import SignUpDialog from "../components/SignUp";
export default function SignIn() {

  const [GoogleSignInMutation] = useGoogleSignInMutation()

  const Navigate = useNavigate()

  const Dispatch = useDispatch()

  const [signUp, setSignUp] = useState(false)

  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });


  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);

    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f6fa",
      }}
    >
      {
        signUp && <>
          <SignUpDialog onClose={() => setSignUp(false)} />
        </>
      }
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            bgcolor: "white",
          }}
        >
          {/* Header */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Website Management
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={3}>
            Sign in to continue
          </Typography>

          {/* Form */}
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ borderRadius: 2, mt: 2 }}
            >
              Sign In
            </Button>

            <GoogleLogin
              onSuccess={async ({ credential }) => {

                if (credential) {

                  try {

                    const { data } = await GoogleSignInMutation(credential)

                    if (data) {

                      Dispatch(Login(data))

                      Navigate('/admin')

                      toast.success(`Welcome to your account ${data?.name}`)

                    }

                  } catch (error: any) {
                    const message =
                      error?.data?.message || error?.message || "Something went wrong";
                    toast.error(message);
                  }
                }
              }}

              onError={() => {

                console.log("Google Login Failed");

              }}

              useOneTap={false}
            />
          </Box>


          <Typography variant="body2" mt={3}>
            Don’t have an account?{" "}
            <Button

              sx={{ cursor: "pointer", fontWeight: "bold" }}

              onClick={() => setSignUp(true)}
            >
              Sign up
            </Button>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
