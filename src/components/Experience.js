import React, { Component } from 'react';
import './sass/experience.scss';
import './sass/inputs.scss';

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      positionTitle: '',
      from: '',
      to: '',
      tasks: '',
      edit: true,
    };
  }

  companyChange = (event) => {
    if (
      event.target.type === 'text' &&
      event.target.value.match(/^[a-zA-Z ]{0,70}$/)
    ) {
      this.setState({
        companyName: event.target.value,
      });
    }
  };
  positionChange = (event) => {
    if (
      event.target.type === 'text' &&
      event.target.value.match(/^[a-zA-Z ]{0,70}$/)
    ) {
      this.setState({
        position: event.target.value,
      });
    }
  };
  fromChange = (event) => {
    if (event.target.type === 'text' && event.target.value.match(/^\d{0,4}$/)) {
      this.setState({
        from: event.target.value,
      });
    }
  };
  toChange = (event) => {
    if (event.target.type === 'text' && event.target.value.match(/^\d{0,4}$/)) {
      this.setState({
        to: event.target.value,
      });
    }
  };
  tasksChange = (event) => {
    this.setState({
      tasks: event.target.value,
    });
  };

  addExperience = () => {
    return (
      <section className="experience">
        <h2>Work Experience</h2>
        <form>
          <div>
            <h3>Company Name:</h3>
            <input
              id="company-name"
              type="text"
              value={this.state.companyName}
              onChange={this.companyChange}
            />
          </div>
          <div>
            <h3>Position Title:</h3>
            <input
              id="position"
              type="text"
              value={this.state.position}
              onChange={this.positionChange}
            />
          </div>
          <div>
            <h3>From:</h3>
            <input
              id="from"
              type="text"
              min="2000"
              max="2099"
              value={this.state.from}
              onChange={this.fromChange}
            />
          </div>
          <div>
            <h3>To:</h3>
            <input
              id="to"
              type="text"
              min="2000"
              max="2099"
              value={this.state.to}
              onChange={this.toChange}
            />
          </div>
          <div class="tasks-div">
            <h3>Tasks:</h3>
            <textarea
              id="tasks"
              type="date"
              rows="5"
              cols="50"
              value={this.state.to}
              onChange={this.toChange}
            />
          </div>
          <button>Add Experience</button>
        </form>
      </section>
    );
  };

  render() {
    return this.addExperience();
  }
}
