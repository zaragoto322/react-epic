import React from "react";
import LogoUrl from './logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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



function Component() {
    return (
        <Header>
            <Logo src={LogoUrl} alt="" />
            <nav>
                <StyleLink to="/" className={({isActive}) => "" + (isActive ? "active" : "")} end>首页</StyleLink>
                <StyleLink to="/History" className={({isActive}) => "" + (isActive ? "active" : "")}>历史</StyleLink>
                <StyleLink to="/About" className={({isActive}) => "" + (isActive ? "active" : "")}>关于</StyleLink>
            </nav>
        </Header>

    );
}

export default Component;