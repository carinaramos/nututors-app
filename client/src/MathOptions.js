import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class MathOptions extends React.Component {  
    mathOptionTutors = () =>
    {

    }
    render () {
        const disabled = this.props.disabled 
        if (disabled === true){
            return(
                <div>
                <FormControlLabel control={<Checkbox />} label="Elementary Math" />
                <FormControlLabel control={<Checkbox />} label="Pre-Alebra" />
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default MathOptions;