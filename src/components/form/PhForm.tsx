/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";


type TFormConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any;
};

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TFormConfig;
const PhForm = ({ children, onSubmit }: TFormProps) => {
    const { handleSubmit } = useForm()
    const formConfig: TFormConfig = {};

    const methods = useForm(formConfig)
    return (
        <FormProvider {...methods} >
            <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
                {children}
            </Form>
        </FormProvider>
    );
};

export default PhForm;