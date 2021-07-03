import React, { Component } from 'react';
import './sass/education.scss';
import './sass/inputs.scss';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      major: '',
      start: '',
      end: '',
      edit: true,
    };
  }

  schoolChange = (event) => {
    if (
      event.target.type === 'text' &&
      event.target.value.match(/^[a-zA-Z ]{0,70}$/)
    ) {
      this.setState({
        schoolName: event.target.value,
      });
    }
  };
  majorChange = (event) => {
    if (
      event.target.type === 'text' &&
      event.target.value.match(/^[a-zA-Z ]{0,70}$/)
    ) {
      this.setState({
        major: event.target.value,
      });
    }
  };
  fromChange = (event) => {
    if (event.target.type === 'text' && event.target.value.match(/^\d{0,4}$/)) {
      this.setState({
        start: event.target.value,
      });
    }
  };
  toChange = (event) => {
    if (event.target.type === 'text' && event.target.value.match(/^\d{0,4}$/)) {
      this.setState({
        end: event.target.value,
      });
    }
  };

  addEdu = () => {
    return (
      <section className="education">
        <h2>Education</h2>
        <form>
          <div>
            <h3>School Name:</h3>
            <input
              id="school-name"
              type="text"
              value={this.state.schoolName}
              onChange={this.schoolChange}
            />
          </div>
          <div>
            <h3>Major:</h3>
            <input
              id="major"
              type="text"
              value={this.state.major}
              onChange={this.majorChange}
            />
          </div>
          <div>
            <h3>Starting Year:</h3>
            <input
              id="start"
              type="text"
              value={this.state.start}
              onChange={this.fromChange}
            />
          </div>
          <div>
            <h3>Graduation Year:</h3>
            <input
              id="end"
              type="text"
              value={this.state.end}
              onChange={this.toChange}
            />
          </div>
          <button>Add Information</button>
        </form>
      </section>
    );
  };

  render() {
    return this.addEdu();
  }
}
