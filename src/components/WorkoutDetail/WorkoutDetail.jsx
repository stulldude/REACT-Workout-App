import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'

export default function WorkoutDetail({ workout }) {
    // need 3 pieces of info
    // name, sets, and reps
    async function handleCountDown(num) {

    }

    function handleSets(exercise) {
        const buttons = [];
        const btnHold = [];
        for (let i = 0; i < exercise.sets; i++) {
            btnHold.push(
                <Button>{exercise.reps}</Button>
            )
        }
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
    const buttonsArray = workout.exercises.map(exercise => handleSets(exercise));

    console.log('buttons:')

    return (
        <>
            {console.log('workout in detail')}
            {console.log(workout.exercises)}
            {buttonsArray}
        </>
    );
}