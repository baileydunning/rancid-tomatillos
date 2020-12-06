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
    console.log(event.target.value)
    this.setState({input: event.target.value})
    this.props.searchMovies(event.target.value)
  }

  render() {
    return (
      <form>
        <label htmlFor="search-bar"></label>
        <input type="text" name="search-bar" className="search-bar" value={this.state.input} onChange={ this.handleChange }></input>
      </form>
    )
  }
}

export default Search