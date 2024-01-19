import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminItems } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyItems } from "./faculty.items";
import { studentItems } from "./student.items";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminItems)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routeGenerator(facultyItems)
    },
    {
        path: '/student',
        element: <App />,
        children: routeGenerator(studentItems)
    },
    {
        path: '/login',
        element: <Login />
    }
])