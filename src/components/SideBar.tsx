import { Layout, Menu } from 'antd';
import { sideBarNavigation } from '../utils/sideBarNavigation';
import { adminItems } from '../routes/admin.routes';
import { facultyItems } from '../routes/faculty.items';
import { studentItems } from '../routes/student.items';
import { useAppSelector } from '../redux/hooks';
const { Sider } = Layout;
const SideBar = () => {

    const { user } = useAppSelector((state) => state.auth)
    const role = user?.role
    const roles = {
        ADMIN: 'admin',
        FACULTY: 'faculty',
        STUDENT: 'student'
    }
    let userRole;
    switch (role) {

        case roles.ADMIN:
            userRole = sideBarNavigation(adminItems, roles.ADMIN);
            break;
        case roles.FACULTY:
            userRole = sideBarNavigation(facultyItems, roles.FACULTY);
            break;
        case roles.STUDENT:
            userRole = sideBarNavigation(studentItems, roles.STUDENT);
            break;
        default:
            break;

    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
            <div style={{
                color: 'white',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1>PH-UNI</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={userRole} />
        </Sider>
    );
};

export default SideBar;