import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import MathOptions from './MathOptions';

class TutorTableForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutors: props.tutorTableList,
            shownTutors: props.tutorTableList,
            math: false,
            science: false,
            english: false,
            socialStudies: false,
            foreignLanguage: false,
            standardizedTesting: false,
            apClasses: false,
            other: false,
            vaccinated: false,
            car: false,
            onCampus: false,
            offCampus: false,
            zoom: false,
        }
        this.getRowsData = this.getRowsData.bind(this);
    }

    handleChangeMath = () => {
        console.log("handle math change")
        console.log(this.state.math)
        if (this.state.math === true) {
            this.setState({
                math: false
            });
        }
        else {
            console.log("hi")
            this.setState({
                math: true
            });
        }
        console.log(this.state.math)
        this.fixTutors()
    }

    handleChangeScience = () => {
        if (this.state.science === true) {
            this.setState({
                science: false
            });
        }
        else {
            this.setState({
                science: true
            });
        }
        this.fixTutors()
    }

    handleChangeEnglish = () => {
        if (this.state.english === true) {
            this.setState({
                english: false
            });
        }
        else {
            this.setState({
                english: true
            });
        }
        this.fixTutors()
    }

    handleChangeSocialStudies = () => {
        if (this.state.socialStudies === true) {
            this.setState({
                socialStudies: false
            });
        }
        else {
            this.setState({
                socialStudies: true
            });
        }
        this.fixTutors()
    }
    
    handleChangeForeignLang = () => {
        if (this.state.foreignLanguage === true) {
            this.setState({
                foreignLanguage: false
            });            
        }
        else {
            this.setState({
                foreignLanguage: true
            });            
        }
        this.fixTutors()
    }
    
    handleChangeStandardizedTesting = () => {
        if (this.state.standardizedTesting === true) {
            this.setState({
                standardizedTesting: false
            });            
        }
        else {
            this.setState({
                standardizedTesting: true
            });            
        }
        this.fixTutors()
    }
    
    handleChangeAPClasses = () => {
        if (this.state.apClasses === true) {
            this.setState({
                apClasses: false
            });            
        }
        else {
            this.setState({
                apClasses: true
            });            
        }
        this.fixTutors()
    }

    handleChangeOther = () => {
        if (this.state.other === true) {
            this.setState({
                other: false
            });         
        }
        else {
            this.setState({
                other: true
            });         
        }
        this.fixTutors()
    }
    
    handleOnCampus = () => {
        if (this.state.onCampus === true) {
            this.setState({
                onCampus: false
            });         
        }
        else {
            this.setState({
                onCampus: true
            });         
        }
        this.fixTutors()
    }
    
    handleOffCampus = () => {
        if (this.state.offCampus === true) {
            this.setState({
                offCampus: false
            });         
        }
        else {
            this.setState({
                offCampus: true
            });         
        }
        this.fixTutors()
    }
    
    handleVax= () => {
        if (this.state.vaccinated === true) {
            this.setState({
                vaccinated: false
            });         
        }
        else {
            this.setState({
                vaccinated: true
            });         
        }
        this.fixTutors()
    }
    handleCar= () => {
        if (this.state.car === true) {
            this.setState({
                car: false
            });         
        }
        else {
            this.setState({
                car: true
            });         
        }
        this.fixTutors()
    }
    handleZoom= () => {
        if (this.state.zoom === true) {
            this.setState({
                zoom: false
            });         
        }
        else {
            this.setState({
                zoom: true
            });         
        }
        this.fixTutors()
    }

    fixTutors = () => {
        let newtutors = []
        this.state.tutors.forEach(element => {
            let include = true
            if (this.state.math === true) {
                if (!element.areas[0].includes("Math")) {
                    include = false
                }
            }
            if (this.state.science === true) {
                if(!element.areas[0].includes("Science")){
                    include = false
                }
            }
            if (this.state.english === true) {
                if(!element.areas[0].includes("English")){
                    include = false
                }
            }
            if (this.state.socialStudies === true) {
                if(!element.areas[0].includes("Social Studies")){
                    include = false
                }
            }
            if (this.state.foreignLanguage === true) {
                if(!element.areas[0].includes("Foreign Language")){
                    include = false
                }
            }
            if (this.state.standardizedTesting === true) {
                if(!element.areas[0].includes("Standardized Testing")){
                    include = false
                }
            }
            if (this.state.apClasses === true) {
                if(!element.areas[0].includes("AP Classes")){
                    include = false
                }
            }
            if (this.state.other === true) {
                if(!element.areas[0].includes("Other")){
                    include = false
                }
            }
            if (this.state.vaccinated === true) {
                if(!element.vax.includes("Fully vaccinated")){
                    include = false
                }
            }
            if (this.state.car === true) {
                if(element.car===false){
                    include = false
                }
            }
            if (this.state.onCampus === true) {
                if(element.onCampus===false){
                    include = false
                }
            }
            if (this.state.offCampus === true) {
                if(element.offCampus===false){
                    include = false
                }
            }
            if (this.state.zoom === true) {
                if(element.zoom===false){
                    include = false
                }
            }
            if (include === true) {
                newtutors.push(element)
            }
        });
        this.setState({
            shownTutors: newtutors
        })
    }

    getRowsData = function (tutorTableList) {
        return tutorTableList.map(row => {
            return (
                <TableRow>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                </TableRow>
            )
        })
    }
    render() {

        return (
            <div>
                <h2>Filter by Subject</h2>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={this.state.math} onChange={this.handleChangeMath} />}
                        label="Math"
                    />
                    <MathOptions disabled={this.state.mathOptions} />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.science} onChange={this.handleChangeScience} />}
                        label="Science"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.english} onChange={this.handleChangeEnglish} />}
                        label="English"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.socialStudies} onChange={this.handleChangeSocialStudies} />}
                        label="Social Studies"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.foreignLanguage} onChange={this.handleChangeForeignLang} />}
                        label="Foreign Language"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.standardizedTesting} onChange={this.handleChangeStandardizedTesting} />}
                        label="Standardized Testing"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.apClasses} onChange={this.handleChangeAPClasses} />}
                        label="AP Classes"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.other} onChange={this.handleChangeOther} />}
                        label="Other"
                    />
                </FormGroup>
                <h2>Other Requirements</h2>
                <FormGroup row>
                <FormControlLabel
                        control={<Checkbox checked={this.state.vaccinated} onChange={this.handleVax} />}
                        label="Vaccinated"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.car} onChange={this.handleCar} />}
                        label="Car"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.onCampus} onChange={this.handleOnCampus} />}
                        label="On Campus Tutoring"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.offCampus} onChange={this.handleOffCampus} />}
                        label="Off Campus Tutoring"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={this.state.zoom} onChange={this.handleZoom} />}
                        label="Zoom/Online Tutoring"
                    />
                </FormGroup>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">First Name</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.getRowsData(this.state.shownTutors)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        );
    }
}

export default TutorTableForm;