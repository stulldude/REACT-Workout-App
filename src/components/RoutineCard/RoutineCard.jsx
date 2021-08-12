import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom";
import * as routineUtil from "../../utilities/routines-service"
import * as routineInfoAPI from "../../utilities/routine-info-api"

export default function RoutineCard({routine, setCurrRoutine, handleShow}) {
    function handleClick() {
    }

    return (
        <Link onClick={handleShow, setCurrRoutine(routine), () => routineInfoAPI.setUserRoutine(routine._id)} to='/routine'>
            <Card >
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