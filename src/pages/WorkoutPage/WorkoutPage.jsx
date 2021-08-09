import Button from '@material-ui/core/Button'

export default function WorkoutPage(workout) {
    // need 3 pieces of info
    // name, sets, and reps

    async function handleSets(exercise) {
        const buttons = [];
        for (let i = 0; i < exercise.sets; i++) {
            buttons.push(
                <Button>{exercise.reps}</Button>
            )
        }
        return {buttons};
    }

    return (
        <>
            {workout.exercises.map(exercise => handleSets(exercise))}
        </>
    );
}