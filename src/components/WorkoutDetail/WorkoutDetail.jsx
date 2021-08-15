import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import * as routineUtil from '../../utilities/routines-service'
import * as routineAPI from '../../utilities/routines-api'
import * as routineInfoAPI from '../../utilities/routine-info-api'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    card: {
        height: "25vmin",
        maxHeight: "250px",
        width: "25vmin",
        maxWidth: "250px",
        backgroundColor: "TEAL"
    },
    control: {
        padding: "10px",
        margin: "10px"
    },
    button: {
        backgroundColor: "grey",
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
            <>
            <Card>
                <CardContent>
                    <div>
                        <p>{exercise.name}</p>
                        <p>{exercise.weight}</p>
                    </div>
                    <div>
                        {btnHold}
                    </div>
                    <br />
                </CardContent>
            </Card>
            </>
        )
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
    
    return (
        <>
            {console.log('workout in detail')}
            {console.log(workout.exercises)}
            {console.log('buttons:')}
            {console.log(buttonsArray.forEach(button => console.log(button.innerHTML)))}
            {console.log(currRoutine)}
            {buttonsArray}
            <Link to="/home">
                <Fab variant="extended" onClick={async () => {
                    await routineInfoAPI.dayCompleted();
                    console.log('fab click')
                    await routineInfoAPI.getUserRoutineInfo().then((value) => {
                        setRoutineInfo(value);
                    });
                    setWorkoutIdx(routineInfo.currentDay % currRoutine.split);
                    updateWorkoutIdx();
                    handleROG();
                }}>
                    <AddIcon />
                    Complete Workout
                </Fab>
            </Link>
        </>
    );
}