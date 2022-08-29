import React from "react";
import LogoUrl from './logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useStores } from "../stores";
import { observer } from 'mobx-react'

const Header = styled.header`
    display: flex;
    aligin-items: center;
    padding: 10px 100px;
    background-color: #02101f;
    color: #fff;
`;
const Logo = styled.img`
    height: 30px;
`;
const StyleLink = styled(NavLink)`
    color: #fff;
    margin-left: 30px;

    &.active {
        border-bottom: 1px solid #fff;
    }
`;

const Login = styled.div`
    margin-left: auto;
`;

const StyledButton = styled(Button)`
    margin-left: 10px;
`;//Button是组件而不是原始的标签，需要如上写




const Component = observer(() => {

    // const [ isLogin, setIsLogin ] = useState(false);
    const navigate = useNavigate();
    const { UserStore, AuthStore } = useStores();

    const handleLogout = () => {
        AuthStore.logout();
    };

    const handleLogin = () => {
        console.log('跳转到登录页面');
        navigate('/Login');
    };

    const handleRegister = () => {
        console.log('跳转到注册页面');
        navigate('/Register')

    };



    return (
        <Header>
            <Logo src={LogoUrl} alt="" />
            <nav>
                <StyleLink to="/" className={({ isActive }) => "" + (isActive ? "active" : "")} end>首页</StyleLink>
                <StyleLink to="/History" className={({ isActive }) => "" + (isActive ? "active" : "")}>历史</StyleLink>
                <StyleLink to="/About" className={({ isActive }) => "" + (isActive ? "active" : "")}>关于</StyleLink>
            </nav>
            <Login>
                {
                    UserStore.currentUser ? <>
                        {UserStore.currentUser.attributes.username} <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
                    </> :
                        <>
                            <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
                            <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
                        </>
                }


            </Login>
        </Header>

    );
})

export default Component;