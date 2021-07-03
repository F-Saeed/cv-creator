import React, { Component } from 'react';
import './sass/inputs.scss';

export default class GeneralInfoInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    if (event.target.type === 'tel' && event.target.value.match(/^\d{0,14}$/)) {
      this.setState({
        value: event.target.value,
      });
    } else if (
      event.target.type === 'text' &&
      event.target.value.match(/^[a-zA-Z ]{0,30}$/)
    ) {
      this.setState({
        value: event.target.value,
      });
    } else if (
      event.target.type === 'email' &&
      event.target.value.match(/^[A-Za-z@0-9.]{0,70}$/)
    ) {
      this.setState({
        value: event.target.value,
      });
    }
  };

  render() {
    const { type, name } = this.props;

    return (
      <div className="general-input">
        <h3>{name}:</h3>
        <input
          id={name}
          type={type}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
