import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css'

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <header>
      TEMPL<img className='logo' src={process.env.PUBLIC_URL + '/templ8s.svg'} />S
      &nbsp;&nbsp;<Link onClick={handleLogOut} to="">Log Out</Link>
      <hr />
      <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;&nbsp;<span>Welcome, {props.user.name}</span>
      </nav>
    </header>
  );
}