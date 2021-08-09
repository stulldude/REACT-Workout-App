import { CardContent, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
export default function RoutineCard({routine}) {
    return (
        <Link>
            <Card>
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