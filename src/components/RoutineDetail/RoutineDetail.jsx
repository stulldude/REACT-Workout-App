import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


export default function RoutineDetail({ routine }) {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography>{ routine.name }</Typography>
                    <Typography>{ routine.split }</Typography>
                    <Typography>{ routine.type }</Typography>
                    <Link>
                        <Button>Next Workout</Button>
                    </Link>
                </CardContent>
            </Card>
        </>
    );
}