import React from 'react'
import AddCardDialog from '../components/AddCardDialog'
import AttendanceCard from '../components/AttendanceCard'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import AttendanceImage from '../images/attendance.svg';
const useStyles = makeStyles((theme) => ({
   container:{
       padding:'5px',
       overflow:'hidden'
   }
}));


const AttendancePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
           <AddCardDialog/>
           <CardContainer>
           <AttendanceCard/><AttendanceCard/><AttendanceCard/><AttendanceCard/><AttendanceCard/><AttendanceCard/><AttendanceCard/><AttendanceCard/>
           </CardContainer>
           <ImageContainer>
               <Image src={AttendanceImage}/>
           </ImageContainer>
        </div>
    )
}

export default AttendancePage



const CardContainer = styled.div`
    padding:50px 100px 100px 100px;
    display:flex; 
    flex-wrap:wrap;
    justify-content:center;

    @media screen and (max-width:700px)
    {
        padding:30px 5px 100px 5px;
    }
`

const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    padding-bottom:50px;
`

const Image = styled.img`
    width:500px;
   @media screen and (max-width:500px)
    {
       width:100%;
    }
`