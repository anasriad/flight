import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, Divider, Box, Typography
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleSignUpMutation, useSignUpMutation } from "../API/UserAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../States/UserSlice";
import toast from "react-hot-toast";
import type { UserType } from "../utils/Types";
interface Props {
    onClose: () => void;
}

export default function SignUpDialog({ onClose }: Props) {

    const [GoogleSignUp] = useGoogleSignUpMutation()

    const Navigate = useNavigate()

    const Dispatch = useDispatch()

    const [SignUp] = useSignUpMutation()

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const formik = useFormik({
        initialValues: { id: '', name: "", email: "", password: "", provider: '' },
        validationSchema,
        onSubmit: async (values: UserType) => {
            try {
                const { data } = await SignUp(values)
                if (data) {

                    Dispatch(Login(data))
                    Navigate('/admin')
                    toast.success('Welcome')

                }
            } catch (error) {
                toast.error('Error')
            }

            onClose();
        },
    });



    return (
        <Dialog open onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="contained">
                            Sign Up
                        </Button>
                    </DialogActions>
                </form>

                <Divider sx={{ my: 2 }}>
                    <Typography variant="body2" color="text.secondary">OR</Typography>
                </Divider>

                <Box display="flex" justifyContent="center">

                    <GoogleLogin
                        onSuccess={async ({ credential }) => {

                            try {
                                const { data } = await GoogleSignUp(credential)

                                Navigate('/admin')

                                Dispatch(Login(data as UserType))

                                toast.success('Account is Created')

                            } catch (error) {

                                toast.error(error as string)

                            }
                            onClose();
                        }}
                        onError={() => {

                            toast.error('Error in Logging in with Google Credentials')

                        }}
                    />
                </Box>
            </DialogContent>
        </Dialog>
    );
}
