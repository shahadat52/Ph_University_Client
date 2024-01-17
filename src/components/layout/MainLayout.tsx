// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { sidebarMenu } from '../../routes/sidebar.routes';
import { adminSideBar } from '../../routes/admin.routes';

const { Header, Content, Footer, Sider } = Layout;

// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//         key: String(index + 1),
//         icon: React.createElement(icon),
//         label: `nav ${index + 1}`,
//     }),
// );
const items: MenuProps['items'] = adminSideBar



const MainLayout = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
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
                <Menu  theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout style={{ height: '100vh' }}>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 20,
                            minHeight: 360,
                            borderRadius: borderRadiusLG,
                            // backgroundColor: 'green'
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;