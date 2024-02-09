/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";


const SelectField = ({ label, name, options }: { label: string, name: string, options: any }) => {
    return (
        <Form.Item label={label} >
            <Controller
                name={name}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={options}
                    />
                )}
            />
        </Form.Item>
    );
};

export default SelectField;