import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0002',
            password: 'admin123'
        }
    })
    const [login] = useLoginMutation()

    const currentUser = useAppSelector((state) => state?.auth.user)
    console.log(currentUser);
    const onSubmit = async (data: FieldValues) => {
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
            navigate(`/${user?.role}/dashboard`)
        } catch (error) {
            toast.error('Something went wrong', { id: toastId, duration: 2000 })
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Id</label>
                    <input type="text" id="id" {...register('id')} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" id="password" {...register('password')} />
                </div>
                <Button htmlType="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;