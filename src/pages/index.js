import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImg from '../images/HeroImage.svg';

const Home = () => {
    return (
        <IndexContainer>
                <HeroContent>
                    <HeroImageContainer>
                        <HeroImage src={HeroImg} />
                    </HeroImageContainer>
                    <HeroText>
                        <HeroHeading>Rev up your routine, manage your attendance, schedule, subject info like a pro.</HeroHeading>
                        <HeroLink>
                            <HLink to='/login'>Sign In</HLink>
                            <HLink to="/signup">Sign Up</HLink>
                        </HeroLink>
                    </HeroText>
                </HeroContent>
        </IndexContainer>
    )
}

export default Home;






// index(landing) page styled components

const IndexContainer = styled.div`
    padding:10px;
`;


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



const HLink = styled(Link)`
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
