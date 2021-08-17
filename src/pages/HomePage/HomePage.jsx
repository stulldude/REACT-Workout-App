import { Link } from 'react-router-dom';
import './HomePage.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import ProgressPage from '../ProgressPage/ProgressPage';

const useStyles = makeStyles({
    card: {
        height: "30vmin",
        maxHeight: "400px",
        minHeight: "280px",
        width: "30vmin",
        maxWidth: "400px",
        minWidth: "280px"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: '2rem',
    },
    pos: {
      marginBottom: 12,
    },
    control: {
      padding: "0px",
      margin: "10px",
      border: '2px solid WHITE',
      background: 'linear-Gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,184,68,1) 100%)',
    },
    grid: {
        justifyContent: "center",
        alignContent: "center",
    },
    link: {
        textDecoration: "none",
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
            <Grid container item spacing={0} className={classes.grid}>
                {currRoutine ?
                <>
                <Card className={classes.control}>
                    <CardContent className={classes.card}>
                        <Typography>CURRENT ROUTINE: {currRoutine.name}</Typography>
                        <Typography>DAYS COMPLETED: {userRoutineInfo.currentDay}</Typography>
                        <Typography>GOAL: {currRoutine.type}</Typography>
                        <Typography>{currRoutine.workouts.length} DAY SPLIT</Typography>
                        {/* <Typography>"{currRoutine.workouts[workoutIdx]}" Day</Typography> */}
                    </CardContent>
                </Card>
                <br/>
                <Link className={classes.link} to="/workout">
                    <Card className={classes.control}>
                        <CardContent className={classes.card}>
                            <Typography className={classes.title}>Next Workout</Typography>
                        </CardContent>
                    </Card>
                </Link>
                </>
                :
                null
            }
            </Grid>
            <Grid container item spacing={0} className={classes.grid}>
                <br/>
                <Link className={classes.link} to="/progress">
                    <Card className={classes.control}>
                        <CardContent className={classes.card}>
                            <Typography className={classes.title}>Progress</Typography>
                            <ProgressPage userRoutineInfo={userRoutineInfo} x="200px" y="200px"/>
                        </CardContent>
                    </Card>
                </Link>
                <br/>
                <Link className={classes.link} to="/routine">
                    <Card className={classes.control}>  
                        <CardContent className={classes.card}>
                            <Typography className={classes.title}>Browse Routines</Typography>
                        </CardContent>
                    </Card>
                </Link> 
            </Grid>
        </Grid>
        </>
    )
}