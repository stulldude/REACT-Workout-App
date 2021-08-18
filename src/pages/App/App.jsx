import { useState } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";
import RoutinePage from "../RoutinePage/RoutinePage";
import ProgressPage from "../ProgressPage/ProgressPage";
import * as routineAPI from "../../utilities/routines-api";

import * as routineInfoAPI from "../../utilities/routine-info-api"
import { useEffect } from 'react';

export default function App() {

  let userRoutineInfo = null
  try {
    console.log('The local routine')
  } catch (e) {
    console.log('No Local Routine');
  }

  const [user, setUser] = useState(getUser());
  const [currRoutine, setCurrRoutine] = useState(null);
  const [userRoutineInfoState, setUserRoutineInfoState] = useState({completedExercises: []});
  const [workoutIdx, setWorkoutIdx] = useState(null);
  let day = 0;
  
  useEffect(function() {
    async function fetchCurrInfo() {
      if (user) {
        userRoutineInfo = await routineInfoAPI.getUserRoutineInfo();
        console.log('Routine Info')
        console.log(userRoutineInfo);
        console.log(userRoutineInfo.currentRoutine);
        console.log(typeof userRoutineInfo.currentRoutine);
        console.log(currRoutine);
        console.log(userRoutineInfoState);
        await setUserRoutineInfoState(await routineInfoAPI.getUserRoutineInfo());
      }
    }
    fetchCurrInfo();
  }, [user])
  
  useEffect(function() {
    async function fetchCurrRoutine() {
      if (userRoutineInfoState != null && userRoutineInfoState.currentRoutine != null) {
        await setCurrRoutine(await routineAPI.getOne(userRoutineInfoState.currentRoutine));
      }
    }
    fetchCurrRoutine().then(() => {console.log('hi')});

    console.log('curr state')
    console.log(currRoutine);
    console.log(userRoutineInfoState)
  }, [user, userRoutineInfoState]);

  useEffect(function() {
    async function fetchIdx() {
      if (userRoutineInfoState != null && currRoutine != null){
        console.log('in use effect')
        console.log(userRoutineInfoState.currentDay);
        console.log(currRoutine.split);
        const idx = userRoutineInfoState.currentDay % currRoutine.split;
        console.log(idx);
        handleSet(idx);
      }
    }
    fetchIdx();
  }, [currRoutine, userRoutineInfoState]);

  async function updateWorkoutIdx() {
    const idx = userRoutineInfoState.currentDay % currRoutine.split;
    console.log(idx);
    handleSet(idx);
  }

  async function handleSet(idx) {
    setWorkoutIdx(idx);
  }

  return (
    <main className="App">
      {console.log('curr Routine' + currRoutine)}
      { user ?
        <>
          <NavBar user={user} setUser={setUser} setCurrRoutine={setCurrRoutine} setUserRoutineInfoState={setUserRoutineInfoState}/>
          <Switch>
            <Route path='/home'>
              <HomePage user={user} currRoutine={currRoutine} userRoutineInfo={userRoutineInfoState} workoutIdx={workoutIdx}/>
            </Route>
            <Route path="/routine">
              <RoutinePage currRoutine={currRoutine} setCurrRoutine={setCurrRoutine} user={user}/>
            </Route>
            <Route path="/progress">
              <ProgressPage userRoutineInfo={userRoutineInfoState} inContainer={false} x="40vmin" y="15vmin"/>
            </Route>
            {currRoutine ? 
              <Route path="/workout">
                <WorkoutDetail workout={currRoutine.workouts[workoutIdx]} 
                  routineInfo={userRoutineInfoState} 
                  currRoutine={currRoutine} 
                  setWorkoutIdx={setWorkoutIdx} 
                  updateWorkoutIdx={updateWorkoutIdx}
                  setRoutineInfo={setUserRoutineInfoState}
                  workoutIdx={workoutIdx}/>
              </Route>
              :
              <br/>
            }
            <Redirect to="/home" />
          </Switch>
          <Redirect to="/home" />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}