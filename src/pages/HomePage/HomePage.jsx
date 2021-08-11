import { Link } from 'react-router-dom';
import './HomePage.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
      width: 275,
      height: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    control: {
      padding: "50px",
      margin: "50px"
    },
  });

export default function HomePage({ currRoutine }) {
    const classes = useStyles();

    return (
        <>
        <Grid container spacing={0}>
            <Card className={classes.root, classes.control}>
                <Typography>USER CURR WORKOUT</Typography>
                <Typography>DAYS COMPLETED: X</Typography>
                <Typography>WHAY DAY: E.G. CHEST</Typography>
                <Typography>NEXT WORKOUT: ? TODAY : 4/20</Typography>
            </Card>
            <br/>
            {currRoutine ?
            <Link to="/workout">
                <Card className={classes.root, classes.control}>
                    <CardContent>
                        <Typography>Next Workout</Typography>
                    </CardContent>
                </Card>
            </Link>
            :
            null
        }
            <br/>
            <Link to="/">
                <Card className={classes.root, classes.control}>
                    <CardContent>
                        <Typography>Progress</Typography>
                    </CardContent>
                </Card>
            </Link>
            <br/>
            <Link to="/routine">
                <Card className={classes.root, classes.control}>  
                    <CardContent>
                        <Typography>Browse Routines</Typography>
                    </CardContent>
                </Card>
            </Link> 
        </Grid>
        </>
    )
}