import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './components/sass/App.scss';
import './components/sass/mainForm.scss';
import './components/sass/buttons.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-form">
          <h1>CV Creator</h1>
          <GeneralInfo />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
