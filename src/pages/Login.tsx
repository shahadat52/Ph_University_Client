/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const { register, handleSubmit } = useForm()
    const [login] = useLoginMutation()

    const defaultValues = {
        id: 'A-0001',
        password: 'admin123'
    }


    const methods = useForm({ defaultValues })

    const currentUser = useAppSelector((state) => state?.auth.user)


    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        const toastId = toast.loading('Logging in', { duration: 2000 })
        const userInfo = {
            id: data.id,
            password: data.password
        }

        try {
            const res = await login(userInfo).unwrap()
            const token = res.data.accessToken
            const user = verifyToken(token)
            dispatch(setUser({ user, token }))
            toast.success('Login successful', { id: toastId, duration: 2000 })
            navigate(`/${(user as any)?.role}/dashboard`)
        } catch (error) {
            if ((error as any)?.status === 404) {
                toast.error('User not found', { id: toastId, duration: 2000 })
                return
            }
            toast.error('Something went wrong', { id: toastId, duration: 2000 })


        }




    }
    return (
        <Row justify='center' align='middle' style={{ height: '100vh' }}>
            <FormProvider {...methods}>
                <PhForm onSubmit={methods.handleSubmit(onSubmit)}>
                    <PhInput type='text' name='id' label='ID:' />
                    <PhInput type='text' name='password' label='Password:' />
                    <Button htmlType="submit">Login</Button>
                </PhForm>
            </FormProvider>
        </Row>
    );
};

export default Login;