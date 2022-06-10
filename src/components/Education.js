import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: '',
      major: '',
      date: '',
    };

    this.handleSchool = this.handleSchool.bind(this);
    this.handleMajor = this.handleMajor.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSchool(event) {
    this.setState({
      school: event.target.value,
    });
  }

  handleMajor(event) {
    this.setState({
      major: event.target.value,
    });
  }

  handleDate(event) {
    this.setState({
      date: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="experience">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="school">School Name:</label>
          <input type="text" id="school" onChange={this.handleSchool} />
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" onChange={this.handleMajor} />
          <label htmlFor="date">Date of Study:</label>
          <input type="text" id="date" onChange={this.handleDate} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Education;
