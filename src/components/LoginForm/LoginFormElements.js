import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';

export const LoginContainer = styled.div`
    padding:10px;
    background-color:#eeeeee;
    border-radius:5px 0px 0px 5px;
    border:1px solid #cdcdcd;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:600px)
    {
        border-radius:5px 5px 5px 5px;
    }
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
    padding:10px 20px;
    margin:5px 0;
    max-width:300px;
    align-self:center;
`

export const Button = styled.button`
    background-color:#cdcdcd;
    outline:none;
    border:1px solid rgba(0,0,0,0);
    border-radius:5px;
    padding:10px 20px;
    align-self:center;

    &:hover{
        border:1px solid #eeeeee;
        cursor:pointer;
    }

`

export const SignupLinkContainer = styled.p`
    text-align:center;
    color:#434343;
    margin:0px;
`

export const SignupLink = styled(Link)`
    text-decoration:none;
    color:green;
    padding:2px;
    border-bottom:1px solid #cdcdcd;
`

export const DirectSigninContainer = styled.div`
    text-align:center;
    padding:10px 0px;
`;

export const Text = styled.p`
    font-size:12px;
    color:#434343;
    padding-bottom:10px;
`;

export const DirectSigninButton = styled.button`
    background-color:rgba(0,0,0,0);
    outline:none;
    border:none;
    padding:5px;
    &:hover{
        background-color:rgba(0,0,0,0.05);
        border-radius:3px;
        cursor:pointer;
    }
`;

export const LoginIconGoogle = styled(FcGoogle)`
    font-size:24px;
`;


export const IndexContainer = styled.div`
    padding:10px;
`;

export const HeroSection = styled.div``;

export const HeroContent = styled.div`
    min-height:85vh;
    display:flex;
    justify-content:space-around;
    @media screen and (max-width:760px)
    {
        flex-direction:column;
        justify-content:center;
    }
`;

export const HeroImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:760px)
    {
        flex-direction:row;
    }
`;

export const HeroImage = styled.img`
    width:500px;
    @media screen and (max-width:1000px)
    {
        width:300px;
    }
`;

export const HeroText = styled.div`
    width:600px;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width:1000px)
    {
        width:400px;
    }
    @media screen and (max-width:760px)
    {
        width:100%;
    }
`;

export const HeroHeading = styled.h1`
    font-size:42px;
    color:#434343;
    padding:20px 0px;

    @media screen and (max-width:1200px)
    {
        font-size:36px;
    }

    @media screen and (max-width:760px)
    {
        font-size:24px;
        font-weight:normal;
        text-align:center;
    }

`;

export const HeroLink = styled.div`
    @media screen and (max-width:760px)
    {
        display:flex;
        justify-content:center;
    }
`;



export const HLink = styled(Link)`
    text-decoration:none;
    background-color:#eeeeee;
    color:#434343;
    font-size:18px;
    padding:5px 20px;
    border:1px solid #cdcdcd;
    border-radius:5px;
    margin:0px 5px;

    &:hover{
        border-color:#eeeeee;
        cursor:pointer;
    }
`;

export const LoginSection = styled.div`
    padding-top:200px;
    display:flex;
    justify-content:center;
`;

export const LoginImageContainer = styled.div`
    display:flex;
    justify-content:center;
    border:0.5px solid #cdcdcd;
    border-radius:0px 5px 5px 0px;
    border-left:0px;
    @media screen and (max-width:600px)
    {
        display:none;
    }
`;

export const Image = styled.img`
    padding-left:20px;
    width:300px;
`;