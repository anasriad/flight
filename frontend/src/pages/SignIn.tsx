import { Box, Container, Typography, TextField, Button, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  // Validation schema
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // TODO: send to backend for local login
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

            {/* Google Login Button (opens account chooser) */}
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                if (credentialResponse.credential) {
                 console.log(credentialResponse.credential)
                }
              }}
              onError={() => {
                console.log("Google Login Failed");
              }}
              useOneTap={false} // ensures a dialog opens to pick account
            />
          </Box>

          {/* Footer */}
          <Typography variant="body2" mt={3}>
            Don’t have an account?{" "}
            <Typography
              component="span"
              color="primary"
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
            >
              Sign up
            </Typography>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
