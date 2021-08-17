import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import * as routineUtil from '../../utilities/routines-service'
import * as routineAPI from '../../utilities/routines-api'
import * as routineInfoAPI from '../../utilities/routine-info-api'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import ChangeWeightButton from '../ChangeWeightButton/ChangeWeightButton';

const useStyles = makeStyles({
    card: {
        width: "100%",
        height: "90%",
    },
    control: {
        width: "10vmin",
        minWidth: "500px",
        height: "5vmin",
        minHeight: "140px",
        border: '2px solid WHITE',
        background: "linear-gradient(160deg, rgba(255,255,255,1) 25%, rgba(250,164,50,0.5368522408963585) 100%)",

    },
    button: {
        backgroundColor: "grey",
    },
    classRow: {
        height: "100%",
        width: "100%"
    },
    grid: {
        
        justifyContent: "center",
        alignContent: "center",
    },
    colOne: {
        display: "flex",
        flexDirection: "column",
        margin: "0",
        justifyContent: "left",
        justifySelf: "left",
        justifyItems: "left",
        alignItems: "left",
        alignContent: "left",
        alignSelf: "left"
    },
    colTwo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    }
});

export default function WorkoutDetail({ workout, routineInfo, currRoutine, setWorkoutIdx, updateWorkoutIdx, setRoutineInfo, workoutIdx }) {
    // need 3 pieces of info
    // name, sets, and reps
    
    const completeArr = []
    const classes = useStyles();

    async function handleCountDown(e, reps, idx, arr, upperIdx) {
        console.log(e.currentTarget.value);
        if (e.currentTarget.value == null) {
            e.currentTarget.value = reps;
        } else {
            if (e.currentTarget.value > 0) {
                e.currentTarget.value = e.currentTarget.value - 1;
            } else {
                e.currentTarget.value = reps;
            };
        }
        e.currentTarget.innerHTML = e.currentTarget.value;
        console.log(e.currentTarget.value == reps);
        console.log(e.currentTarget.value + ' ' + reps)
        if (e.currentTarget.value == reps) completeArr[upperIdx][idx] = true;
        else completeArr[upperIdx][idx] = false;
        console.log('upperIdx: ' + upperIdx)
        console.log('idx: ' + idx)
        console.log('arr at those indexs' + completeArr[upperIdx][idx]);
        console.log(completeArr);
    };

    function handleSets(exercise, idx) {
        const buttons = [];
        const btnHold = [];
        let innerArr = [];
        for (let i = 0; i < exercise.sets; i++) {
            btnHold.push(
                <Fab className={classes.button} 
                    onClick={e => handleCountDown(e, exercise.reps, i, innerArr, idx)} 
                    value={null}
                    isempty={true}>&nbsp;
                </Fab>
            )
            innerArr.push(false);
        }
        completeArr.push(innerArr);
        console.log(completeArr);
        buttons.push(
            <Grid item>
                <Card className={classes.control}>
                    <CardContent className={classes.card}>
                        <div className="card-row">
                            <div className={classes.colOne}>
                                <p>{exercise.name}<br />{exercise.sets}×{exercise.reps}</p>
                                <ChangeWeightButton currRoutine={currRoutine} exercise={exercise} workoutIdx={workoutIdx} eIdx={idx} key={idx}/>
                            </div>
                            <div className={classes.colTwo}>
                                {btnHold}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        )
        console.log(buttons);
        return buttons;
    }
    const buttonsArray = workout.exercises.map((exercise, idx) => handleSets(exercise, idx));

    function handleROG() {
        workout.exercises.forEach((exercise, idx) => {
            if (completeArr[idx].every(ele => ele == true)) {
                console.log(exercise.name + ' was fully completed')
                console.log(`${exercise.name}'s weight was ${exercise.weight}.`)
                console.log(currRoutine._id);
                routineAPI.handleROG(currRoutine._id, workoutIdx, idx);
                console.log(`${exercise.name}'s weight is now ${exercise.weight}.`)
            } else console.log(exercise.name + ' was not fully completed')
        })
    }

    function saveUserExercises() {
        routineInfoAPI.addCompletedExercises(workoutIdx);
    }
    
    return (
        <>
            {console.log('workout in detail')}
            {console.log(workout.exercises)}
            {console.log('buttons:')}
            {console.log(buttonsArray.forEach(button => console.log(button.innerHTML)))}
            {console.log(currRoutine)}
            <br/>
            <Grid container direction="column" spacing={1} className={classes.grid}>
                {buttonsArray}
            </Grid>
            <br/>
            <Link to="/home">
                <Fab variant="extended" onClick={async () => {
                    await routineInfoAPI.dayCompleted();
                    console.log('fab click')
                    await routineInfoAPI.getUserRoutineInfo().then((value) => {
                        setRoutineInfo(value);
                    });
                    setWorkoutIdx(routineInfo.currentDay % currRoutine.split);
                    updateWorkoutIdx();
                    saveUserExercises();
                    handleROG();
                }}>
                    <AddIcon />
                    Complete Workout
                </Fab>
            </Link>
        </>
    );
}