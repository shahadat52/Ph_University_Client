import { useGetAcademicSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {

    const { data } = useGetAcademicSemestersQuery(undefined)
    console.log(data)
    return (
        <div>
            <h1>THis is academic semester management page</h1>
        </div>
    );
};

export default AcademicSemester;