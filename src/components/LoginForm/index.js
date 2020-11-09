import React from 'react'
import LoginImage from '../../images/loginImage.svg';
import {
    LoginContainer,
    Header,
    LoginForm,
    UserInput,
    Button,
    SignupLinkContainer,
    SignupLink,
    DirectSigninContainer,
    DirectSigninButton,
    Text,
    LoginIconGoogle,
    LoginSection,
    LoginImageContainer,
    Image
} from './LoginFormElements';
export const LoginFormElement = () => {
    return (

        <LoginSection>
            <LoginContainer>
                <Header>Sign In</Header>
                <LoginForm>
                    <UserInput type="text" placeholder="Username" />
                    <UserInput type="password" placeholder="password" />
                    <br />
                    <Button>Login</Button>
                    <DirectSigninContainer>
                        <Text>Or login with</Text>
                        <DirectSigninButton><LoginIconGoogle /></DirectSigninButton>
                    </DirectSigninContainer>
                    <SignupLinkContainer>Dont have an account, <SignupLink to="/Signup">Signup</SignupLink> </SignupLinkContainer>
                </LoginForm>
            </LoginContainer>
            <LoginImageContainer>
                <Image src={LoginImage} />
            </LoginImageContainer>
        </LoginSection>
    )
}


