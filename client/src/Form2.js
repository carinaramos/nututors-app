import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
  
const baseURL = 'https://nututors-api.herokuapp.com';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    },
    TextField: {
        width: '50ch',
   }
}));
export default function Form2(props) {
    const classes = useStyles();
    
    const verifyAdd = (ev) => {
        const data = {
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value,
            hoursWorking: document.getElementById('hoursWorking').value,
            hoursDesired: document.getElementById('hoursDesired').value,
            imageURL: document.getElementById('url').value,
            major: document.getElementById('major').value,
        }
        console.log(data);
        let valid = true;
        // ADD FORM VALIDATION HERE

        if (valid == true) {
            fetch(`${baseURL}/tutors/`, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    // send to catch block:
                    console.log("error");
                    throw Error(response.statusText);
                } else {
                    console.log("done");
                    return response.json();
                }
            })
            .then(data => {
                console.log('Success:', data);                
            })
        }
    };
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField
            required
            id="fname"
            label="First Name"
            variant="outlined"
            />
            <TextField
            required
            id="lname"
            label="Last Name"
            variant="outlined"
            />
            <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            />
            <TextField
            required
            id="phone"
            label="Phone Number"
            variant="outlined"
            />
        </div>
        <div>
            <TextField
                required
                id="gender"
                label="Gender"
                variant="outlined"
            />
            <TextField
            required
            id="url"
            label="Profile Image URL"
            variant="outlined"
            />
            <TextField
            required
            id="major"
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
          id="hoursWorking"
          label="Hours Working"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
                />
                <TextField
          id="hoursDesired"
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
            className="notes"
            multiline
            rows={4}
            variant="outlined"
            />
            <div>
                <Button variant="outlined" onClick={() => verifyAdd()} color="default">Submit</Button>
            </div>
      </form>
    );
  }


