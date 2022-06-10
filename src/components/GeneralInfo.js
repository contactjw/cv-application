import React, { Component } from 'react';
import '../styles/generalInfo.css';

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePhone(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="general-info">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleName} />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" onChange={this.handleEmail} />
          <label htmlFor="phone">Phone #:</label>
          <input type="text" id="phone" onChange={this.handlePhone} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
