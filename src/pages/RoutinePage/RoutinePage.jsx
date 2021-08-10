import { useEffect } from "react";
import { useState } from "react";
import * as routinesAPI from '../../utilities/routines-api'
import RoutineIndex from "../../components/RoutineIndex/RoutineIndex";
import RoutineDetail from "../../components/RoutineIndex/RoutineDetail";


export default function RoutinePage() {
    const [showRoutines, setShowRoutines] = useState(false);
    const [currRoutine, setCurrRoutine] = useState(null);
    const [routineList, setRoutineList] = useState([]);

    useEffect(function() {
        async function getRoutines() {
            const routines = await routinesAPI.getAll();
            console.log(routines);
            setRoutineList(routines);
        }
        getRoutines();
    }, []);

    return (
        <>
        {currRoutine ? 
            <RoutineDetail routine={currRoutine} />
            :
            <RoutineIndex routineList={routineList} setCurrRoutine={setCurrRoutine} />

            // <RoutineDetail routine={currRoutine} />
        }
        </>
    );
}