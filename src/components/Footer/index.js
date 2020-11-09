import React from 'react'
import styled from 'styled-components';
import {GiTechnoHeart as Heart} from 'react-icons/gi'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                Made with <HeartLogo/> by <Highlight>Aman</Highlight> & <Highlight>Harsh</Highlight>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;


const FooterContainer= styled.div`
    background-color:#eeeeee;
    padding:30px 20px 50px 20px;
    margin-top:50px;
`;

const FooterContent = styled.p`
    text-align:center;
    font-size:18px;
    color:#434343;
`;

const Highlight = styled.span`
   font-weight:bold;
`;

const HeartLogo = styled(Heart)`
    color:red;
    font-size:18px;
`;