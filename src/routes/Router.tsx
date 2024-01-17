import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {  adminRoutes } from "./admin.routes";
import AdminDashboard from "../admin/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: 'admin',
                children: adminRoutes
            },
        ]
    }
])