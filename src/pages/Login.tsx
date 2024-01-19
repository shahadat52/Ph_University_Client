import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0002',
            password: 'admin123'
        }
    })
    const [login, { data, error }] = useLoginMutation()


    const onSubmit = async (data) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap()
        console.log({ res });
        
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