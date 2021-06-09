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
            mathOptions: false,
            scienceOptions: false,
            englishOptions: false,
            ssOptions: false,
            flOptions: false,
            stOptions: false,
            apClassesOptions: false,
            otherOptions: false
        }
        this.getRowsData = this.getRowsData.bind(this);
    }

    handleChangeMath = () => {
        console.log("handle math change")
        console.log(this.state.math)
        if (this.state.math === true) {
            this.state.math = false
        }
        else {
            console.log("hi")
            this.state.math = true
        }
        console.log(this.state.math)
        this.fixTutors()
    }

    handleChangeScience = () => {
        if (this.state.science === true) {
            this.state.science = false
        }
        else {
            this.state.science = true
        }
        this.fixTutors()
    }

    handleChangeEnglish = () => {
        if (this.state.english === true) {
            this.state.english = false
        }
        else {
            this.state.english = true
        }
        this.fixTutors()
    }

    handleChangeSocialStudies = () => {
        if (this.state.socialStudies === true) {
            this.state.socialStudies = false
        }
        else {
            this.state.socialStudies = true
        }
        this.fixTutors()
    }

    handleChangeForeignLang = () => {
        if (this.state.foreignLanguage === true) {
            this.state.foreignLanguage = false
        }
        else {
            this.state.foreignLanguage = true
        }
        this.fixTutors()
    }

    handleChangeStandardizedTesting = () => {
        if (this.state.standardizedTesting === true) {
            this.state.standardizedTesting = false
        }
        else {
            this.state.standardizedTesting = true
        }
        this.fixTutors()
    }

    handleChangeAPClasses = () => {
        if (this.state.apClasses === true) {
            this.state.apClasses = false
        }
        else {
            this.state.apClasses = true
        }
        this.fixTutors()
    }

    handleChangeOther = () => {
        if (this.state.other === true) {
            this.state.other = false
        }
        else {
            this.state.other = true
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