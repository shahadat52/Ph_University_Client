import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminItems } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyItems } from "./faculty.items";


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
    }
])