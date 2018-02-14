import React, { Component } from 'react';

import API from '../../utils/API.js'

class Home extends Component {
  state = {
    topic:'',
    prompt:'',
    response:''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault()

    API.createCard({
        topic: this.state.topic,
        prompt: this.state.prompt,
        response: this.state.response
      })
      .then()
  }

  render() {
    return(
      <div>
        <h3>Add a card</h3>
        <form>
          <input
            name='topic'
            value={this.state.topic}
            onChange={this.handleInputChange}
          />
          <input
            name='prompt'
            value={this.state.prompt}
            onChange={this.handleInputChange}
          />
          <input
            name='response'
            value={this.state.response}
            onChange={this.handleInputChange}
          />
          <button onSubmit={this.handleSubmit}>Add Card</button>
        </form>
      </div>
    )
  }
}

export default 'Home';
