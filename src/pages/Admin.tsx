import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <h1>THis is admin page</h1>
            <Outlet/>
        </div>
    );
};

export default Admin;