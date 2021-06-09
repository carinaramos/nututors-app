import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import StorageIcon from '@material-ui/icons/Storage';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export default function Menu(props){

    const handleClick = (event) => {
        const componentID = event.currentTarget.id;
        props.onNavigationClick(componentID);
    };
    
    return(
        <div>
            <ListItem button id="cards" onClick={handleClick}>
                <ListItemIcon>
                    <AppsIcon />
                </ListItemIcon>
                <ListItemText id="text" primary="Cards" />
            </ListItem>
            <ListItem button id="table" onClick={handleClick}>
                <ListItemIcon>
                    <StorageIcon />
                </ListItemIcon>
                <ListItemText primary="Table View" />
            </ListItem>
            <ListItem button id="form" onClick={handleClick}>
                <ListItemIcon>
                    <GroupAddIcon/>
                </ListItemIcon>
                <ListItemText primary="Add Tutors" />
            </ListItem>
        </div>
    );
}


