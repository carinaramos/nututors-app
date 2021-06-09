import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './useStyles';
import Menu from './Menu';
import Cards from './Cards';
import Header from './Header';
import Form2 from './Form2';


export default function PermanentDrawerLeft() {
    const classes = useStyles();

    const [component, setComponent] = React.useState("header");
    const [tutors, setTutors] = React.useState([]);
    React.useEffect(() => {
      fetchTutors();
    }, []);
  
    const handleNavigationClick = (componentID) => {
        setComponent(componentID);
        console.log(component);
    }
  
    const fetchTutors = () => {
      fetch('https://nututors-api.herokuapp.com/tutors')
      .then(response => response.json())
      .then(allTutors => setTutors(allTutors));
    }
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              NU|Tutors Tutor Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <List>
            <Menu onNavigationClick={handleNavigationClick}/>
          </List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {component === "cards" && <Cards tutorList={tutors} />}
            {component === "table" && <Header title="table" />}
            {component === "form" && <Form2 title="Add Tutor" />}
        </main>
      </div>
    );
}