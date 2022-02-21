import RoutineCard from '../RoutineCard/RoutineCard';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid: {
        justifyContent: "center",
        alignContent: "center",
        marginTop: "10px",
    },
})

export default function RoutineIndex({ routineList, setCurrRoutine, handleShow }) {
    const classes = useStyles();

    const routines = routineList.map((routine, idx) =>
        <Grid item>
            <RoutineCard routine={routine} setCurrRoutine={setCurrRoutine} handleShow={handleShow} key={idx}/>
        </Grid>
    );
    
    return (
        <>
            <Grid className={classes.grid} container item  spacing={4}>
                { routines }
            </Grid>
        </>
    );
}