import Dashboard from './Dashboard';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTutor: null,
            tutors: [],
        }

        fetch('https://nututors-api.herokuapp.com/tutors')
            .then(response => response.json())
            .then(tutors => this.setState({ tutors: tutors }));

        this.handleTutorSelection = this.handleTutorSelection.bind(this);
    }
  
    handleTutorSelection(tutor) {
        console.log(tutor);
        // this.setState({
        //     currentTutor: tutor
        // })
        fetch(`/tutors/${tutor._id}`)
            .then(response => response.json())
            .then(allInfo => {
                this.setState({
                    currentTutor: allInfo
                });
                console.log(this.state.currentTutor);
            })


    }
  
    render () {        
        return (
            <div className="container">
                {/* <Header title="All tutors" /> */}

                <main className="main">
                    <Dashboard/>
                </main>  
            </div>
        );
    }
}

export default App;