import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom";
import * as routineInfoAPI from "../../utilities/routine-info-api"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: "30vmin",
        maxHeight: "250px",
        minHeight: "160px",
        width: "30vmin",
        maxWidth: "250px",
        minWidth: "160px"
    },
    control: {
      padding: "0px",
      margin: "10px",
      border: '2px solid WHITE',
      background: 'linear-Gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,184,68,1) 100%)',
    },
});

export default function RoutineCard({routine, setCurrRoutine, handleShow}) {
    const classes = useStyles();
    async function handleClick() {
        handleShow()
        setCurrRoutine(routine);
        routineInfoAPI.setUserRoutine(routine._id)
    }

    return (
            <Link onClick={() => handleClick()} to='/home'>
                <Card className={classes.control}>
                    <CardContent className={classes.card}>
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