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

    const [vaccinated, setVaccinated] = React.useState(false);
    const [car, setCar] = React.useState(false);
    const [onCampus, setOnCampus] = React.useState(false);
    const [offCampus, setOffCampus] = React.useState(false);
    const [online, setOnline] = React.useState(false);
    const [testPrep, setTestPrep] = React.useState(false);
    const [math, setMath] = React.useState(false);
    const [science, setScience] = React.useState(false);
    const [english, setEnglish] = React.useState(false);
    const [socialStudies, setSocialStudies] = React.useState(false);
    const [worldLanguage, setWorldLanguage] = React.useState(false);


    const handleVaccinated = () => {
        setVaccinated(!vaccinated);
    };

    const handleCar = () => {
        setCar(!car);
    };
    const handleOnCampus = () => {
        setOnCampus(!onCampus);
    };
    const handleOffCampus = () => {
        setOffCampus(!offCampus);
    };
    const handleOnline = () => {
        setOnline(!online);
    };
    const handleTestPrep = () => {
        setTestPrep(!testPrep);
    };
    const handleMath = () => {
        setMath(!math);
    };
    const handleScience = () => {
        setScience(!science);
    };
    const handleEnglish = () => {
        setEnglish(!english);
    };
    const handleSocialStudies = () => {
        setSocialStudies(!socialStudies);
    };
    const handleWorldLanguage = () => {
        setWorldLanguage(!worldLanguage);
    };


    const classes = useStyles();

   
    const verifyAdd = (ev) => {
        let areas = []
        if (math != false) {
            areas.push("Math")
        }
        if (science != false) {
            areas.push("Science")
        }
        if (socialStudies != false) {
            areas.push("Social Studies")
        }
        if (english != false) {
            areas.push("English")
        }
        if (worldLanguage != false) {
            areas.push("World Language")
        }
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
            car: car,
            vax: vaccinated,
            onCampus: onCampus,
            offCampus: offCampus,
            zoom: online,
            testPrep: testPrep,
            areas: areas.join(", ")
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
                props.onFormSubmit();
                props.onRedirect("cards");
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
                name="vaccinated"
                color="primary"
                onClick={handleVaccinated}
            />
            }
            label="Vaccinated"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="car"
                color="primary"
                onClick={handleCar}
            />
            }
            label="Car"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="onCampus"
                color="primary"
                onClick={handleOnCampus}
            />
            }
            label="On Campus Tutoring"
                />
                <FormControlLabel
            control={
            <Checkbox
                name="offCampus"
                color="primary"
                onClick={handleOffCampus}
            />
            }
            label="Off Campus Tutoring"
                />
            <FormControlLabel
            control={
            <Checkbox
                name="online"
                color="primary"
                onClick={handleOnline}
            />
            }
            label="Zoom/Online Tutoring"
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
                Subjects
                 <div>
                 <FormControlLabel
            control={
            <Checkbox
                name="math"
                color="primary"
                onClick={handleMath}
            />
            }
            label="Math"
                    />
            <FormControlLabel
            control={
            <Checkbox
                name="science"
                color="primary"
                onClick={handleScience}
            />
            }
            label="Science"
                    />
            <FormControlLabel
            control={
            <Checkbox
                name="english"
                color="primary"
                onClick={handleEnglish}
            />
            }
            label="English"
                    />
            <FormControlLabel
            control={
            <Checkbox
                name="socialStudies"
                color="primary"
                onClick={handleSocialStudies}
            />
            }
            label="Social Studies"
                    />
                <FormControlLabel
            control={
            <Checkbox
                name="worldLanguage"
                color="primary"
                onClick={handleWorldLanguage}
            />
            }
            label="World Language"
                    />
                <FormControlLabel
            control={
            <Checkbox
                name="testPrep"
                color="primary"
                onClick={handleTestPrep}
            />
            }
            label="Test Prep"
                    />
                    </div>
            </div>
            <div>
                <Button variant="outlined" onClick={() => verifyAdd()} color="default">Submit</Button>
            </div>
      </form>
    );
  }