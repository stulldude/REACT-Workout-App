import RoutineCard from '../RoutineCard/RoutineCard';

export default function RoutineIndex({ routines }) {
    const routines = routines.map(routine => 
        <RoutineCard routine={routine}/>
    );

    return (
        <>
            { routines }
        </>
    );
}