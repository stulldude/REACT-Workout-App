import Button from '@material-ui/core/Button'

export default function WorkoutDetail({ workout }) {
    // need 3 pieces of info
    // name, sets, and reps
    async function handleCountDown(num) {

    }

    function handleSets(exercise) {
        const buttons = [];
        for (let i = 0; i < exercise.sets; i++) {
            buttons.push(
                <Button>{exercise.reps}</Button>
            )
        }
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