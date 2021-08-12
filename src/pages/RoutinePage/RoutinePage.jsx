import { useEffect } from "react";
import { useState } from "react";
import * as routinesAPI from '../../utilities/routines-api'
import RoutineIndex from "../../components/RoutineIndex/RoutineIndex";
import RoutineDetail from "../../components/RoutineDetail/RoutineDetail";
import Button from '@material-ui/core/Button'


export default function RoutinePage({currRoutine, setCurrRoutine, user}) {
    const [showRoutines, setShowRoutines] = useState(false);
    const [routineList, setRoutineList] = useState([]);
    useEffect(function() {
        async function getRoutines() {
            const routines = await routinesAPI.getAll();
            console.log(routines);
            setRoutineList(routines);
        }
        getRoutines();
        console.log('hi');
    }, []);

    async function handleShowRoutines() {
        setShowRoutines(!showRoutines);
    }
    
    

    return (
        <>
        {currRoutine ? 
            <>
                <Button onClick={handleShowRoutines} >{ showRoutines ? 'Hid' : 'Change Routine' }</Button>
                <RoutineDetail routine={currRoutine} />
                { showRoutines ? <RoutineIndex routineList= {routineList} setCurrRoutine={setCurrRoutine} handleShow={handleShowRoutines}/> : '' }
            </>
            :
            <RoutineIndex routineList={routineList} setCurrRoutine={setCurrRoutine} />

            // <RoutineDetail routine={currRoutine} />
        }
        </>
    );
}