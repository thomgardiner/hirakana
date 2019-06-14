import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    currentStep: 0,
    
  }

  render(){
    return(
      <div className="App">
        <p> this is some stuff </p>
        <p> the current step is {this.state.currentStep}</p>
      </div>
    )
  }
}

export default App;
