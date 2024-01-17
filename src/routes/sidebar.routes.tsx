import { NavLink } from "react-router-dom";

export const sidebarMenu = [
    {
        key: 'Create admin',
        label: <NavLink to='/admin/create-admin'>Create admin</NavLink>
    },
    {
        key: 'Create Faculty',
        label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>
    },
    {
        key: 'Create Student',
        label: <NavLink to='/admin/create-student'>Create student</NavLink>
    }

]