import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { List, ListItem, ListItemText} from '@material-ui/core';

export default function TutorDialog(props) {
    const { onClose, tutor, open } = props;
    var areas = []
    var types = []

    if (tutor.areas !== undefined) {
      const stringAreas = tutor.areas + ''
      areas = stringAreas.split(", ");
      if (tutor.onCampus) types.push("On-campus");
      if (tutor.offCampus) types.push("Off-campus");
      if (tutor.zoom) types.push("Online");
    }

    const handleClose = () => {
      onClose();
    };
  
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="alert-dialog-title">Meet {tutor.firstName}!</DialogTitle>
        <DialogContent>
            <DialogContentText>
              Areas of expertise:
            </DialogContentText>
            <List>
              {areas.map( (area) => 
                <ListItem button key={area}>
                  <ListItemText primary={area} />
                </ListItem>
              )}
            </List>
            <DialogContentText>
              Available for:
            </DialogContentText>
            <List>
              {types.map( (type) => 
                <ListItem button key={type}>
                  <ListItemText primary={type + " tutoring"} />
                </ListItem>
              )}
            </List>
                
        </DialogContent>
        <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
            Close
            </Button>
        </DialogActions>
      </Dialog>
    );
}

TutorDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    tutor: PropTypes.object,
};