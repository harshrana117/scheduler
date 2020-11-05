import React from 'react'
import styled from 'styled-components';
import { LoginFormElement } from '../components/LoginForm'
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import HeroImg from '../images/HeroImage.svg'
const Home = () => {
    return (
        <IndexContainer>
            <HeroSection>
                <HeroContent>
                    <HeroImageContainer>
                        <HeroImage src={HeroImg} />
                    </HeroImageContainer>
                    <HeroText>
                        <HeroHeading>Rev up your routine, manage your attendance, schedule, subject info like a pro.</HeroHeading>
                        <HeroLink>
                            <HLinkS to='login'>Sign In</HLinkS>
                            <HLink to="/signup">Sign Up</HLink>
                        </HeroLink>
                    </HeroText>
                </HeroContent>
            </HeroSection>
            <LoginFormElement id="login" />
        </IndexContainer>
    )
}

export default Home;


const IndexContainer = styled.div`
    padding:10px;
`;

const HeroSection = styled.div``;

const HeroContent = styled.div`
    min-height:85vh;
    display:flex;
    justify-content:space-around;
    @media screen and (max-width:760px)
    {
        flex-direction:column;
        justify-content:center;
    }
`;

const HeroImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:760px)
    {
        flex-direction:row;
    }
`;

const HeroImage = styled.img`
    width:500px;
    @media screen and (max-width:1000px)
    {
        width:300px;
    }
`;

const HeroText = styled.div`
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

const HeroHeading = styled.h1`
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

const HeroLink = styled.div`
    @media screen and (max-width:760px)
    {
        display:flex;
        justify-content:center;
    }
`;

const HLinkS = styled(LinkS)`
    background-color:#eeeeee;
    color:#434343;
    font-size:18px;
    padding:5px 20px;
    border:1px solid #cdcdcd;
    border-radius:5px;
    margin-right:20px;

    &:hover{
        border-color:#eeeeee;
        cursor:pointer;
    }
`;

const HLink = styled(Link)`
    text-decoration:none;
    background-color:#eeeeee;
    color:#434343;
    font-size:18px;
    padding:5px 20px;
    border:1px solid #cdcdcd;
    border-radius:5px;

    &:hover{
        border-color:#eeeeee;
        cursor:pointer;
    }
`;
