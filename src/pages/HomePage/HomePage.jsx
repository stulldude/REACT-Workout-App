import { Link } from 'react-router-dom';
import './HomePage.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    card: {
        height: "25vmin",
        maxHeight: "250px",
        width: "25vmin",
        maxWidth: "250px",
        backgroundColor: "TEAL"
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
      padding: "10px",
      margin: "10px"
    },
    grid: {
        justifyContent: "center",
        alignContent: "center",
    }
});


export default function HomePage({ currRoutine, user, userRoutineInfo, workoutIdx}) {
    const classes = useStyles();

    // useEffect(function() {
    //     async function getUserRoutineInfo() {
    //         const routineInfo = await routineInfoAPI.getUserRoutineInfo();
    //         setRoutineInfo(routineInfo);
    //     }
    //     getUserRoutineInfo();
    // }, []);

    return (
        <>
        <Grid container spacing={0} className={classes.grid}>
            {currRoutine ?
            <>
            <Card className={classes.control}>
                <CardContent className={classes.card}>
                    <Typography>Current Routine: {currRoutine.name}</Typography>
                    <Typography>DAYS COMPLETED: {userRoutineInfo.currentDay}</Typography>
                    {/* <Typography>"{currRoutine.workouts[workoutIdx]}" Day</Typography> */}
                </CardContent>
            </Card>
            <br/>
            <Link to="/workout">
                <Card className={classes.control}>
                    <CardContent className={classes.card}>
                        <Typography>Next Workout</Typography>
                    </CardContent>
                </Card>
            </Link>
            </>
            :
            null
        }
            <br/>
            <Link to="/">
                <Card className={classes.control}>
                    <CardContent className={classes.card}>
                        <Typography>Progress</Typography>
                    </CardContent>
                </Card>
            </Link>
            <br/>
            <Link to="/routine">
                <Card className={classes.control}>  
                    <CardContent className={classes.card}>
                        <Typography>Browse Routines</Typography>
                    </CardContent>
                </Card>
            </Link> 
        </Grid>
        </>
    )
}