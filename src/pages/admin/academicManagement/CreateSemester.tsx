/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Col, Flex, Form, } from 'antd';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import SelectField from '../../../components/form/SelectField';
import yearsArray, {  months, semesterOptions } from '../../../constant/createSemester.const';
import { useAddAcademicSemesterMutation } from '../../../redux/features/admin/academicManagement.api';
import { toast } from 'sonner';
import { TResponse } from '../../../types.ts/global';

interface FormData {
    name: string;
    year: string;
    startMonth: string;
    endMonth: string
}

const CreateSemester = () => {
    const method = useForm()
    const [addAcademicSemester] = useAddAcademicSemesterMutation()

   


    const onSubmit: SubmitHandler<any> = async (data: FormData) => {
        const toastId = toast.loading('Semester crating',{duration:2000})
        const semester = semesterOptions.filter(option => option.value === (data as any).semesterName)
        const semesterName = semester[0]?.label
        const semesterData = {
            name: semesterName,
            code: (data as any)?.semesterName,
            year: String(data?.year),
            startMonth: data?.startMonth,
            endMonth: data?.endMonth
        }
        try {
            const res = await addAcademicSemester(semesterData) as TResponse
            if (res?.data?.success) {
                console.log(res.data);
                toast.success(`${res?.data?.message}😃😃`, { id: toastId, duration:2000 })
            } else if (res.error) {
                toast.error(`${res.error.data.message}😡😡`, { id: toastId, duration:2000 })
            }


        } catch (error) {
            toast.error('Failed to create academic semester', { id: toastId, duration:2000 })

        }
       
    }


    return (
        <Flex justify='center'>
            <Col span={6}>
                <FormProvider {...method} >
                    <Form
                        layout='vertical'
                        onFinish={method.handleSubmit(onSubmit)}>
                        <SelectField label='Semester Name' name='semesterName' options={semesterOptions} />
                        <SelectField label='Year' name='year' options={yearsArray} />
                        <SelectField label='Start Month' name='startMonth' options={months} />
                        <SelectField label='End Month' name='endMonth' options={months} />
                        <Button htmlType='submit'>Submit</Button>
                    </Form>
                </FormProvider>
            </Col>
        </Flex>
    );
};

export default CreateSemester;