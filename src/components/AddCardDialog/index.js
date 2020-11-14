import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(2),
            minWidth: theme.spacing(64),
            minHeight: theme.spacing(16),
        },
    },
    container: {
        marginTop: '60px'
    },
    paper: {
        background: theme.palette.grey[200],
        borderRadius:'10px'
    },
    head: {
        padding: '10px'
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '0px 10px 10px 10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}));



const AddCardDialog = () => {
    const classes = useStyles();
    return (
        <Grow  in={true} mountOnEnter unmountOnExit>
            <div className={classes.container}>
                <div className={classes.root}>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h6" color="primary" align="center" className={classes.head}>CREATE NEW CARD</Typography>
                        <div className={classes.formContainer}>
                            <form className={classes.form}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    id="subject"
                                    label="Subject"
                                    name="subject"
                                    autoComplete="subject"
                                    size="small"
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    create
                                </Button>
                            </form>
                        </div>
                    </Paper>
                </div>
            </div>
        </Grow>
    )
}

export default AddCardDialog
