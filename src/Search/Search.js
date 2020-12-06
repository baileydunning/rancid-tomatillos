import React, { Component } from 'react'
import './Search.scss'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    this.setState({input: event.target.value})
    this.props.updateText(this.state.input)
  }

  render() {
    return (
      <form>
        <label htmlFor="search-bar"></label>
        <input type="text" name="search-bar" className="search-bar" value={this.state.input} onChange={ this.handleChange } data-testid="search-bar"></input>
      </form>
    )
  }
}

export default Search