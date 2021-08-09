import { useEffect } from "react";
import { useState } from "react";


export default function RoutinePage() {
    const [currRoutine, setCurrRoutine] = useState(null)

    useEffect(function() {
        async function getRoutines() {
            const routines = await routinesAPI.getAll();
        }
    })
    return (
    <RoutineIndex setCurrRoutine={setCurrRoutine}/>
    );
}