import React from 'react';

class Header extends React.Component {

    render () {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                {/* <button id="reset" className="btn">Reset Data</button> */}
            </header>
        );
    }
}

export default Header;