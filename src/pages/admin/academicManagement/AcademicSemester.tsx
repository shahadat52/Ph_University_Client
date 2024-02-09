import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";


const AcademicSemester = () => {

    const { data } = useGetAllSemesterQuery(undefined)
    console.log(data)
    return (
        <div>
            <h1>THis is academic semester management page</h1>
        </div>
    );
};

export default AcademicSemester;