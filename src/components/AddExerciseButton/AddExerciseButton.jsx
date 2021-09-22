import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function AddExerciseButton({ workoutidx, currRoutine}) {
    return (
        <Fab variant="extended" onClick={async () =>
            {

            }
        }>
            <AddIcon/>
            Add Exercise
        </Fab>
    )
}