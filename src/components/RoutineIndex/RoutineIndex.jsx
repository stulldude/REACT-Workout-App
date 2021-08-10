import RoutineCard from '../RoutineCard/RoutineCard';

export default function RoutineIndex({ routineList, setCurrRoutine }) {
    console.log(routineList)
    const routines = routineList.map(routine => 
        <RoutineCard routine={routine} setCurrRoutine={setCurrRoutine}/>
    );

    return (
        <>
            { routines }
        </>
    );
}