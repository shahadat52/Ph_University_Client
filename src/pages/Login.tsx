import { Button, Input } from "antd";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";


// {
//     defaultValues: {
//         id: 'A-0002',
//         password: 'admin123'
//     }
// }
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const { register, handleSubmit } = useForm()
    const [login] = useLoginMutation()

    const methods = useForm()

    const currentUser = useAppSelector((state) => state?.auth.user)
    console.log(currentUser);


    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        // const toastId = toast.loading('Logging in', { duration: 2000 })
        // const userInfo = {
        //     id: data.id,
        //     password: data.password
        // }

        // try {
        //     const res = await login(userInfo).unwrap()
        //     const token = res.data.accessToken
        //     const user = verifyToken(token)
        //     dispatch(setUser({ user, token }))
        //     toast.success('Login successful', { id: toastId, duration: 2000 })
        //     navigate(`/${user?.role}/dashboard`)
        // } catch (error) {
        //     toast.error('Something went wrong', { id: toastId, duration: 2000 })
        // }

    }
    return (
        <FormProvider {...methods}>
            <PhForm onSubmit={methods.handleSubmit(onSubmit)}>
                <div>
                    <PhInput type='text' name='UserId' label='ID:' />
                    {/* <Input   type="text" id="id" {...register('id')} /> */}
                </div>
                <div>
                <PhInput type='text' name='password' label='Password:' />
                </div>
                <Button htmlType="submit">Login</Button>
            </PhForm>
        </FormProvider>
    );
};

export default Login;