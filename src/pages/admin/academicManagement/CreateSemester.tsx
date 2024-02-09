/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Col, Flex, Form, } from 'antd';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import SelectField from '../../../components/form/SelectField';
import { months, semesterOptions } from '../../../constant/createSemester.const';

interface FormData {
    name: string;
    year: string;
    startMonth: string;
    endMonth: string
}

const CreateSemester = () => {
    const method = useForm()
    const currentYear = new Date().getFullYear()
    const yearsArray = []
    yearsArray.push({ year: currentYear, label: currentYear });

    for (let i = 1; i <= 4; i++) {
        yearsArray.push({ value: currentYear + i, label: currentYear + i });
    }


    const onSubmit: SubmitHandler<any> = (data: FormData) => {
        const semester = semesterOptions.filter(option => option.value === (data as any).semesterName)
        const semesterName = semester[0]?.label
        const semesterData = {
            name: semesterName,
            code: (data as any)?.semesterName,
            year: data?.year,
            startMonth: data?.startMonth,
            endMonth: data?.endMonth

        }
        console.log(semesterData);
    }

    const date = new Date().getFullYear()

    console.log(date);


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