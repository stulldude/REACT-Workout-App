import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import Button from '@material-ui/core/Button'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import HomePage from '../HomePage/HomePage'
import NavBar from '../../components/NavBar/NavBar';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';
import RoutinePage from '../RoutinePage/RoutinePage';
import * as routineAPI from "../../utilities/routines-api"
import * as routineUtil from "../../utilities/routines-service"
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
  const [userRoutineInfoState, setUserRoutineInfoState] = useState(null);
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
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Route path='/home'>
              <HomePage currRoutine={currRoutine} userRoutineInfo={userRoutineInfoState} workoutIdx={workoutIdx}/>
            </Route>
            <Route path="/routine">
              <RoutinePage currRoutine={currRoutine} setCurrRoutine={setCurrRoutine} user={user}/>
            </Route>
            {currRoutine ? 
              <Route path="/workout">
                <WorkoutDetail workout={currRoutine.workouts[workoutIdx]} 
                  routineInfo={userRoutineInfoState} 
                  currRoutine={currRoutine} 
                  setWorkoutIdx={setWorkoutIdx} 
                  updateWorkoutIdx={updateWorkoutIdx}
                  setRoutineInfo={setUserRoutineInfoState}/>
              </Route>
              :
              <br/>
            }
            <Redirect to="/home" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
      <Button onClick={() => setWorkoutIdx(workoutIdx+1)}>{workoutIdx}</Button>
    </main>
  );
}