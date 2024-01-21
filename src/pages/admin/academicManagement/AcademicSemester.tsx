import { useGetAcademicSemestersQuery } from "../../../redux/features/auth/academicSemesterApi";

const AcademicSemester = () => {

    const academic = useGetAcademicSemestersQuery(undefined)
    console.log({academic});
    return (
        <div>
            <h1>THis is academic semester management page</h1>
        </div>
    );
};

export default AcademicSemester;