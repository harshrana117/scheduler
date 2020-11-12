import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { SignIn} from '../components/LoginForm'




const useStyles = makeStyles({
    container:{
        marginTop:'80px'
    }
   });


const LandingPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
          <SignIn/>
        </div>
    )
}

export default LandingPage
