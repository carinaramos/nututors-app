import React from 'react';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {

    render () {
        return (
            <header className="header">
                <Typography variant="h2" gutterBottom>
                    {this.props.title}
                </Typography>
            </header>
        );
    }
}

export default Header;