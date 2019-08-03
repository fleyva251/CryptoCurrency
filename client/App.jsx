import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>
        Hello, world! It&apos;s Garrett
        <span role="img" aria-label="100 Emoji and face with sunglasses emoji">
          💯😎
        </span>
      </h1>
    );
  }
}

export default App;
