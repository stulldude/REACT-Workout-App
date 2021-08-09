import { Link } from 'react-router-dom';
import './HomePage.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

export default function HomePage() {
    const [currRoutine, setCurrRoutine] = useState(null);
    const [currWorkout, setCurrWorkout] = useState(null);

    return (
        <>  
            <Card className="UserProgress">
                <Typography>USER CURR WORKOUT</Typography>
                <Typography>DAYS COMPLETED: X</Typography>
                <Typography>WHAY DAY: E.G. CHEST</Typography>
                <Typography>NEXT WORKOUT: ? TODAY : 4/20</Typography>
            </Card>
            <br/>
            <Link to="/workout">
                <Card className="Card">     
                    <CardContent>
                        <Typography>Next Workout</Typography>
                    </CardContent>
                </Card>
            </Link>
            <br/>
            <Link to="/">
                <Card className="Card">     
                    <CardContent>
                        <Typography>Progress</Typography>
                    </CardContent>
                </Card>
            </Link>
            <br/>
            <Link to="/">
                <Card className="Card">     
                    <CardContent>
                        <Typography>Browse Workouts</Typography>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}