import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom";
import * as routineUtil from "../../utilities/routines-service"
import * as routineInfoAPI from "../../utilities/routine-info-api"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: "25vmin",
        maxHeight: "250px",
        width: "25vmin",
        maxWidth: "250px",
        backgroundColor: "TEAL"
    },
})

export default function RoutineCard({routine, setCurrRoutine, handleShow}) {
    const classes = useStyles();
    async function handleClick() {
        console.log(routine);
        handleShow();
        setCurrRoutine(routine);
        routineInfoAPI.setUserRoutine(routine._id)
    }

    return (
        <Link onClick={() => handleClick()} to='/routine'>
            <Card className={classes.card}>
                <CardContent>
                    <div>
                        <Typography>{routine.name}</Typography>
                        <Typography>{routine.type} Routine</Typography>
                    </div>
                        <Typography>{routine.split} Day Split</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}