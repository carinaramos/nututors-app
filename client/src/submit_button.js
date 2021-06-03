'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Submit'
    );
  }
}


const domContainer = document.querySelector('#submit_button');
ReactDOM.render(e(LikeButton), domContainer);