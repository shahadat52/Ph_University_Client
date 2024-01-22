import { Input } from "antd";
import { useFormContext } from "react-hook-form";

const PhInput = ({ type, name, label }) => {
    const { register } = useFormContext()
    return (
        <div>
            {
                label && <label htmlFor="">{label}</label>
            }
            <Input type={type} id={name} {...register(`${name}`)} />
        </div>
    );
};

export default PhInput;