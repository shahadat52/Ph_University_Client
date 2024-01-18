import EnrolledCourse from "../pages/student/EnrolledCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentItems = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Enroll Course',
                path: 'enrollCourse',
                element: <EnrolledCourse />
            }
        ]
    },

]