import { ReactNode } from "react";
import AdminDashboard from "../admin/AdminDashboard";
import CreateAdmin from "../admin/CreateAdmin";
import CreateFaculty from "../admin/CreateFaculty";
import CreateStudent from "../admin/CreateStudent";

type TChild = {
    path: string;
    element: ReactNode;
}
export const adminPath2 = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
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


//Programetically admin routes
export const adminRoutes = adminPath2.reduce((acc: TChild[], item) => {
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