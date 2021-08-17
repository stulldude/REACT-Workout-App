import RoutineCard from '../RoutineCard/RoutineCard';

export default function RoutineIndex({ routineList, setCurrRoutine, handleShow }) {
    console.log(routineList)
    const routines = routineList.map((routine, idx) => 
        <RoutineCard routine={routine} setCurrRoutine={setCurrRoutine} handleShow={handleShow} key={idx}/>
    );

    return (
        <>
            {console.log(`${handleShow} is handleShow`)}
            { routines }
        </>
    );
}