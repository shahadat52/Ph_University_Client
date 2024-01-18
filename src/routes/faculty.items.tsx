import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyItems = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultyDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Offered Course',
                path: 'offeredCourse',
                element: <OfferedCourse />
            }
        ]
    },

]