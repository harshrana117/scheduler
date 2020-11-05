import React from 'react'
import {
    LoginContainer,
    Header,
    LoginForm,
    UserInput,
    Button,
    SignupLinkContainer,
    SignupLink
} from './LoginFormElements';
export const LoginFormElement = ({id}) => {
    return (
       <LoginContainer id={id}>
           <Header>Sign In</Header>
           <LoginForm>
               <UserInput type="text" placeholder="Username"/>
               <UserInput type="password" placeholder="password"/>
               <br/>
               <Button>Login</Button>
               <SignupLinkContainer>Dont have an account, <SignupLink to="/Signup">Signup</SignupLink> </SignupLinkContainer>
           </LoginForm>
       </LoginContainer>
    )
}


