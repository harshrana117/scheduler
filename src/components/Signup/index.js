import React from 'react'
import {

    SignupContainer,
    Header,
    UserInput,
    Button,
    SignupForm,
    MainContainer

} from './SignupElements';



const Signup = () => {
    return (
        <MainContainer>
            <SignupContainer>
                <Header>Sign Up</Header>
                <SignupForm>
                    <UserInput type="email" placeholder="email" />
                    <UserInput type="text" placeholder="Username" />
                    <UserInput type="password" placeholder="password" />
                    <UserInput type="password" placeholder="type password again" />
                    <br />
                    <Button>Signup</Button>
                </SignupForm>
            </SignupContainer>
        </MainContainer>


    )
}

export default Signup;
