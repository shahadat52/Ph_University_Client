import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
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