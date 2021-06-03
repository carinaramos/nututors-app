import TutorList from './TutorList';
import Header from './Header';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTutor: null,
            tutors: [],
        }

        fetch('http://localhost:8081/tutors')
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
                <Header title="All tutors" />

                <main className="main">
                    <TutorList tutorList={this.state.tutors} onTutorSelection={this.handleTutorSelection} />
                </main>  
            </div>
        );
    }
}

export default App;