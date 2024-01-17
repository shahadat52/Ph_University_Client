import { ReactNode } from "react";
import AdminDashboard from "../admin/AdminDashboard";
import CreateAdmin from "../admin/CreateAdmin";
import CreateFaculty from "../admin/CreateFaculty";
import CreateStudent from "../admin/CreateStudent";
import { NavLink } from "react-router-dom";

type TSidebarItem = {
    key: string;
    label: ReactNode,
    children?: TSidebarItem[]
}
type TRoute = {
    path: string;
    element: ReactNode;
}
export const adminPaths = [
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


//Programmatically admin routes
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
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

//Programmatically admin routes
export const adminSideBar = adminPaths.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
        console.log(item.path);
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

console.log({ adminSideBar });