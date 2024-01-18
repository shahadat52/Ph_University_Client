/* eslint-disable @typescript-eslint/no-unused-vars */
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';


const { Header, Content, } = Layout;
const MainLayout = () => {
    const {
        token: { borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <SideBar />
            <Layout style={{ height: '100vh' }}>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>

                    <div
                        style={{
                            padding: 20,
                            minHeight: 360,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;