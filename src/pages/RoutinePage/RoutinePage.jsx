import { useEffect } from "react";
import { useState } from "react";
import * as routinesAPI from '../../utilities/routines-api'
import RoutineIndex from "../../components/RoutineIndex/RoutineIndex";


export default function RoutinePage() {
    const [currRoutine, setCurrRoutine] = useState(null)
    const [routineList, setRoutineList] = useState([])

    useEffect(function() {
        async function getRoutines() {
            const routines = await routinesAPI.getAll();
            setRoutineList(routines);
        }
        getRoutines();
    }, []);

    return (
        <RoutineIndex routineList={routineList} setCurrRoutine={setCurrRoutine} />
    );
}