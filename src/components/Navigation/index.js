import React from 'react'
import {
    Navbar,
    NavContainer,
    LogoContainer,
    Logo,
    NavMenuContainer,
    NavMenu,
    NavLinkContainer,
    NavLink
} from './NavigationElements';

const Navigation = () => {
    return (
        <Navbar>
            <NavContainer>
                <LogoContainer>
                    <Logo to="/">Reved</Logo>
                </LogoContainer>
                <NavMenuContainer>
                    <NavMenu>
                        <NavLinkContainer>
                            <NavLink to="/attendance">Attendance</NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                            <NavLink to="/scheduler">Schedule</NavLink>
                        </NavLinkContainer>
                    </NavMenu>
                </NavMenuContainer>
            </NavContainer>
        </Navbar >
    )
}

export default Navigation
