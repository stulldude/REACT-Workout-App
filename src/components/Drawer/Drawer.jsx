import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import TimelineIcon from '@material-ui/icons/Timeline'
import ListIcon from '@material-ui/icons/List'
import { Link } from 'react-router-dom';
import "./Drawer.css"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/home">
            <ListItem button>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText>Home</ListItemText>
            </ListItem>
        </Link>
        <Link to="/workout">
            <ListItem button>
                <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
                <ListItemText>Next Workout</ListItemText>
            </ListItem>
        </Link>
        <Link to="/progress">
            <ListItem button>
                <ListItemIcon><TimelineIcon /></ListItemIcon>
                <ListItemText>Progress</ListItemText>
            </ListItem>
        </Link>
        <Link to="/routine">
            <ListItem button>
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText>Change Routine</ListItemText>
            </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img className='tinyLogo' src={process.env.PUBLIC_URL + '/templ8s.svg'}/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
