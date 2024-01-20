/* eslint-disable @typescript-eslint/no-unused-vars */
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';


const { Header, Content, } = Layout;
const MainLayout = () => {
    const dispatch = useAppDispatch()
    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    const onSubmit = () => {
        dispatch(logout())
    }
    return (
        <Layout>
            {/* <Header></Header> */}

            <SideBar />
            <Layout style={{ height: '100vh' }}>

                <Header style={{ padding: 0, }} ><Button onClick={onSubmit}>Log-out</Button></Header>
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