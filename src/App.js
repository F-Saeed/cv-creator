import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './components/sass/App.scss';
import './components/sass/mainForm.scss';
import './components/sass/buttons.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      generalInfo: { name: '', email: '', telephone: '' },
      education: {
        schoolName: '',
        major: '',
        start: '',
        end: '',
        id: uniqid(),
      },
      educationData: [],
      experience: {
        companyName: '',
        position: '',
        from: '',
        to: '',
        tasks: '',
        id: uniqid(),
      },
      experienceData: [],
    };
  }

  onGeneralInfoChange = (currentValue, id) => {
    const tempInfo = { ...this.state.generalInfo };
    tempInfo[id] = currentValue;

    if (id === 'telephone' && currentValue.match(/^\d{0,14}$/)) {
      this.setState({
        generalInfo: tempInfo,
      });
    } else if (id === 'name' && currentValue.match(/^[a-zA-Z ]{0,30}$/)) {
      this.setState({
        generalInfo: tempInfo,
      });
    } else if (id === 'email' && currentValue.match(/^[A-Za-z@0-9.]{0,70}$/)) {
      this.setState({
        generalInfo: tempInfo,
      });
    }
  };

  onEducationChange = (currentValue, id) => {
    const tempInfo = { ...this.state.education };
    tempInfo[id] = currentValue;

    if (id === 'schoolName' && currentValue.match(/^[a-zA-Z ]{0,70}$/)) {
      this.setState({
        education: tempInfo,
      });
    } else if (id === 'major' && currentValue.match(/^[a-zA-Z ]{0,70}$/)) {
      this.setState({
        education: tempInfo,
      });
    } else if (id === 'start' && currentValue.match(/^\d{0,4}$/)) {
      this.setState({
        education: tempInfo,
      });
    } else if (id === 'end' && currentValue.match(/^\d{0,4}$/)) {
      this.setState({
        education: tempInfo,
      });
    }
  };

  onEduSubmit = (event) => {
    event.preventDefault();
    this.setState({
      educationData: [...this.state.educationData, this.state.education],
      education: {
        schoolName: '',
        major: '',
        start: '',
        end: '',
        id: uniqid(),
      },
    });
  };

  onExperienceChange = (currentValue, id) => {
    const tempInfo = { ...this.state.experience };
    tempInfo[id] = currentValue;

    if (id === 'companyName' && currentValue.match(/^[a-zA-Z ]{0,70}$/)) {
      this.setState({
        experience: tempInfo,
      });
    } else if (id === 'position' && currentValue.match(/^[a-zA-Z ]{0,70}$/)) {
      this.setState({
        experience: tempInfo,
      });
    } else if (id === 'to' && currentValue.match(/^\d{0,4}$/)) {
      this.setState({
        experience: tempInfo,
      });
    } else if (id === 'from' && currentValue.match(/^\d{0,4}$/)) {
      this.setState({
        experience: tempInfo,
      });
    } else if (id === 'tasks') {
      this.setState({
        experience: tempInfo,
      });
    }
  };

  onExpSubmit = (event) => {
    event.preventDefault();
    this.setState({
      experienceData: [...this.state.educationData, this.state.experience],
      experience: {
        companyName: '',
        position: '',
        from: '',
        to: '',
        tasks: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const state = this.state;

    return (
      <div className="App">
        <div className="main-form">
          <h1>CV Creator</h1>
          <GeneralInfo infoChange={this.onGeneralInfoChange} state={state} />
          <Education
            eduChange={this.onEducationChange}
            state={state}
            submitEdu={this.onEduSubmit}
          />
          <Experience
            expChange={this.onExperienceChange}
            state={state}
            submitExp={this.onExpSubmit}
          />
        </div>
        <div className="preview">
          {state.experienceData.map((info) => {
            return <h2>{info.companyName}</h2>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
