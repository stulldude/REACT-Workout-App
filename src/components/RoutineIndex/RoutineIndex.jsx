import RoutineCard from '../RoutineCard/RoutineCard';

export default function RoutineIndex({ routines, setCurrRoutine }) {
    const routines = routines.map(routine => 
        <RoutineCard routine={routine} setCurrRoutine={setCurrRoutine}/>
    );

    return (
        <>
            { routines }
        </>
    );
}