import React, { Component } from 'react';

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      company: '',
      position: '',
      tasks: '',
      dateWorked: '',
    };

    this.handleCompany = this.handleCompany.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleTasks = this.handleTasks.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCompany(event) {
    this.setState({
      company: event.target.value,
    });
  }

  handlePosition(event) {
    this.setState({
      position: event.target.value,
    });
  }

  handleTasks(event) {
    this.setState({
      tasks: event.target.value,
    });
  }

  handleDate(event) {
    this.setState({
      dateWorked: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="experience">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" onChange={this.handleCompany} />
          <label htmlFor="position">Position:</label>
          <input type="text" id="position" onChange={this.handlePosition} />
          <label htmlFor="tasks">Tasks:</label>
          <input type="text" id="tasks" onChange={this.handleTasks} />
          <label htmlFor="date">Date Worked:</label>
          <input type="text" id="date" onChange={this.handleDate} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Experience;
