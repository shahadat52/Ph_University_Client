import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/academicManagement/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateSemester from "../pages/admin/academicManagement/CreateSemester";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import CreateDepartment from "../pages/admin/academicManagement/CreateDepartment";

type TSidebarItem = {
    key: string;
    label: ReactNode,
    children?: TSidebarItem[]
}
type TRoute = {
    path: string;
    element: ReactNode;
}


export const adminItems = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create A. Semester',
                path: 'create-academicSemester',
                element: <CreateSemester />
            },
            {
                name: 'Academic Semester',
                path: 'academicSemester',
                element: <AcademicSemester />
            },
            {
                name: 'Create A. Faculty',
                path: 'create-academicFaculty',
                element: <CreateFaculty />
            },
            {
                name: 'Academic Faculty',
                path: 'academicFaculty',
                element: <AcademicFaculty />
            },
            {
                name: 'Create Academic Department',
                path: 'create-academicDepartment',
                element: <CreateDepartment />
            },
            {
                name: 'Academic Department',
                path: 'academicDepartment',
                element: <AcademicDepartment />
            },

        ]
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create student',
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    },

]


//Programmatically admin routes
export const adminRoutes = adminItems.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        })
    }

    if (item.children) {
        item.children.forEach(child => acc.push({
            path: child.path,
            element: child.element
        }))
    }
    return acc
}, [])

//! Hard code admin routes
// export const adminPath = [
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
// ]

//Programmatically sideBar navigation routes
export const adminSideBar = adminItems.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    }

    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        })
    }

    return acc
}, [])
