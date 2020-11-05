import styled from 'styled-components'
import {Link} from 'react-router-dom';


export const Navbar = styled.nav`
    position:fixed;
    width:100%;
    background-color:#e5e5e5;
    border-bottom:1px solid #cdcdcd;
    padding:20px;
    @media screen and (max-width:500px)
    {
       padding:10px;
    }
`

export const NavContainer = styled.div`
    display:flex;
    justify-content:space-around;
`

export const LogoContainer = styled.div`
    display:flex;
    justify-content:center;
   
`

export const Logo =styled(Link)`
    text-decoration:none;
    font-weight:bold;
    font-size:32px;
    color:#434343;
    transition:color 0.2s;

    &:hover{
        color:#38761d;
        transition:color 0.2s;
    }
`

export const NavMenuContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

export const NavMenu = styled.ul`
    display:flex;
    list-style:none;
    justify-content:center;
    height:100%;
`

export const NavLinkContainer = styled.li`
    padding-right:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:500px)
    {
        padding-right:10px;
    }
`

export const NavLink = styled(Link)`
    text-decoration:none;
    font-size:18px;
    color:#434343;
    transition:color 0.2s;

    &:hover{
        color:#38761d;
        transition:color 0.2s;
    }
`


