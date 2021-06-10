import Dashboard from './Dashboard';
import React from 'react';

class App extends React.Component {  
    render () {        
        return (
            <div className="container">
                <main className="main">
                    <Dashboard/>
                </main>  
            </div>
        );
    }
}

export default App;