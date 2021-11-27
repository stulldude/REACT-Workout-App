import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import Drawer from "../Drawer/Drawer"

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
        <div>
          <Drawer />
        </div>
        <Link to="/home"><img className='logo' src={process.env.PUBLIC_URL + '/templ8s.svg'} /></Link>
        <div>
          <Link className="logout" onClick={handleLogOut} to="">Log Out</Link>
        </div>
      </div>
    </header>
  );
}