import React from 'react'
import {
    ErrorPageContainer,
    ErrorHighlight,
    ErrorImageContainer,
    ErrorImage
} from './ErrorPageElements';
import errorImage from '../../images/errorImage.svg'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorHighlight>maybe this page is under construction or never existed.</ErrorHighlight>
            <ErrorImageContainer>
                <ErrorImage src={errorImage}/>
            </ErrorImageContainer>
        </ErrorPageContainer>
    )
}

export default ErrorPage


// #0F8B1F image color
