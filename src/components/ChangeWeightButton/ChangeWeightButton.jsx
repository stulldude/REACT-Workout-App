import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import * as routineAPI from '../../utilities/routines-api'
export default function ChangeWeightButton({exercise, workoutIdx, currRoutine, eIdx}) {
    const [open, setOpen] = useState(false);
    const [weight, setWeight] = useState([exercise.weight])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(evt) {
        setOpen(false);
        routineAPI.updateWeight(currRoutine._id, workoutIdx, eIdx, weight);
    }
    function handleChange(evt) {
        setWeight(evt.target.value);
    }


    return (
        <>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            {weight != 0 ? `${weight} Lbs` : "Bodyweight"}
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Change Weight</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                type="number"
                defaultValue={exercise.weight}
                fullWidth
                onChange={handleChange}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
                Submit
            </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}