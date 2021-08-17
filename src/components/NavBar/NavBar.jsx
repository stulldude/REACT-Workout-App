import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css'

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
    props.setCurrRoutine(null);
    props.setUserRoutineInfoState(null);
  }

  return (
    <header>
      <div className="title-bar">
        <img className='logo' src={process.env.PUBLIC_URL + '/templ8s.png'} />
        <Link className="logout" onClick={handleLogOut} to="">Log Out</Link>
      </div>
      <nav>
        <Link to="/home">Home Page</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;&nbsp;<span>Welcome, {props.user.name}</span>
      </nav>
    </header>
  );
}