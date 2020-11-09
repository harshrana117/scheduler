import styled from 'styled-components';

export const MainContainer = styled.div`
    padding:100px 20px;
    display:flex;
    justify-content:center;
   
`

export const SignupContainer = styled.div`
    background-color:#eeeeee;
    padding:20px;
    border-radius:10px;
    text-align:center;
`

export const Header = styled.h1`
    font-size:36px;
    color:#434343;
    padding:20px 10px;
`

export const UserInput = styled.input`
    display:block;
    min-width:300px;
    padding:5px 20px;
    margin:10px 0px;
    color:#434343;
    font-size:16px;
    border:1px solid #cdcdcd;
    outline:none;
    border-radius:5px;
`

export const SignupForm = styled.form`
`

export const Button = styled.button`
    padding:10px 40px;
    border:1px solid rgba(0,0,0,0);
    outline:none;
    border-radius:5px;
    background-color:#cdcdcd;

    &:hover{
        border:1px solid white;
        cursor:pointer;
    }
    
`