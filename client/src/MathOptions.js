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

class MathOptions extends React.Component {  
    mathOptionTutors = () =>
    {
        
    }
    render () {
        const disabled = this.props.disabled 
        if (disabled === true){
            return(
                <FormControlLabel control={<Checkbox name="Elementary Math" />} label="Elementary Math" />
            )
        }
        else{
            return null
        }
    }
}

export default MathOptions;