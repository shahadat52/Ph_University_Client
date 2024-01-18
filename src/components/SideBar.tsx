import { Layout, Menu } from 'antd';
import { sideBarNavigation } from '../utils/sideBarNavigation';
import { adminItems } from '../routes/admin.routes';
import { facultyItems } from '../routes/faculty.items';
const { Sider } = Layout;
const SideBar = () => {

    const role = 'faculty'
    const roles = {
        ADMIN: 'admin',
        FACULTY: 'faculty',
        STUDENT: 'student'
    }
    let userRole;
    switch (role) {

        case roles.ADMIN:
            userRole = sideBarNavigation(adminItems, role);
            break;
        case roles.FACULTY:
            userRole = sideBarNavigation(facultyItems, role);
            break;
        case roles.STUDENT:
            userRole = sideBarNavigation(facultyItems, role);
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