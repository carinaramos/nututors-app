import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function Form2() {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField
            required
            id="outlined-fname-input"
            label="First Name"
            variant="outlined"
                />
            <TextField
            required
            id="outlined-lname-input"
            label="Last Name"
            variant="outlined"
            />
            <TextField
            required
            id="outlined-email-input"
            label="Email"
            variant="outlined"
            />
            <TextField
            required
            id="outlined-phone-input"
            label="Phone Number"
            variant="outlined"
            />
        </div>
        <div>
            <TextField
                required
                id="outlined-gender-input"
                label="Gender"
                variant="outlined"
            />
            <TextField
            required
            id="outlined-url-input"
            label="Profile Image URL"
            variant="outlined"
            />
            <TextField
            required
            id="outlined-major-input"
            label="Major"
            variant="outlined"
            />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Graduation Year</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value="20"
          label="Graduation Year"
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </FormControl>    
            </div>
        <div>
        <TextField
          id="outlined-number"
          label="Current Hours Working"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
                />
                <TextField
          id="outlined-number"
          label="Hours Desired"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
            </div>
            <div>
            <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Vaccinated"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Car"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="On Campus Tutoring"
                />
                <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Off Campus Tutoring"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Zoom/Online Tutoring"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="checkedB"
                color="primary"
            />
            }
            label="Test Prep"
            />
            </div>
            <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </form>
    );
  }


