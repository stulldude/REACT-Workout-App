import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import HomePage from '../HomePage/HomePage'
import NavBar from '../../components/NavBar/NavBar';
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail';
import RoutinePage from '../RoutinePage/RoutinePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [currRoutine, setCurrRoutine] = useState(null);
  console.log(currRoutine);

  

  return (
    <main className="App">
      {console.log('curr Routine' + currRoutine)};
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
              <HomePage />
            </Route>
            <Route path="/routine">
              <RoutinePage currRoutine={currRoutine} setCurrRoutine={setCurrRoutine} />
            </Route>
            {currRoutine ? 
            <Route path="/workout">
              <WorkoutDetail workout={currRoutine.workouts[0]}/>
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
    </main>
  );
}