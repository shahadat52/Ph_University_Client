/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const TextField = ({ label, name, }: any) => {
    return (
        <Form.Item label={label}>
            <Controller
                name={name}
                render={({ field }) => (
                    <Input {...field} />
                )}
            />
        </Form.Item>
    );
};

export default TextField;