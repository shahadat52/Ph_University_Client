import { useForm } from "react-hook-form";

const PhForm = ({ children, onSubmit}) => {
    const { handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0002',
            password: 'admin123'
        }
    })
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           {children} 
        </form>
    );
};

export default PhForm;