import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const LoginContainer = styled.div`
    padding:10px;
    background-color:#e5e5e5;
    margin:20px;
    border-radius:5px;
    border:1px solid #cdcdcd;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const Header = styled.h1`
    font-size:36px;
    font-weight:normal;
    padding:20px 0px 20px 0;
    text-align:center;
`

export const LoginForm = styled.form`
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const UserInput = styled.input`

    outline:none;
    border:1px solid #cdcdcd;
    border-radius:5px;
    padding:5px 10px;
    margin:5px 0;
    max-width:300px;
    align-self:center;
`

export const Button = styled.button`
    background-color:#cdcdcd;
    outline:none;
    border:1px solid rgba(0,0,0,0);
    border-radius:5px;
    padding:5px 20px;
    align-self:center;

    &:hover{
        border:1px solid #eeeeee;
        cursor:pointer;
    }

`

export const SignupLinkContainer = styled.p`
    text-align:center;
    color:#434343;
    margin:20px 0px;
`

export const SignupLink = styled(Link)`
    text-decoration:none;
    color:green;
    padding:2px;
    border-bottom:1px solid #cdcdcd;
`