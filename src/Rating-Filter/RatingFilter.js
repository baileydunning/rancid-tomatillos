import React, { Component } from 'react';
import './RatingFilter.scss';

class RatingFilter extends Component {
  constructor() {
    super();
    this.state = {
      minRating: 0,
      maxRating: 10
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: parseInt(event.target.value) }, () => {
      this.props.updateRating(this.state.minRating, this.state.maxRating);
    });
  }

  render() {
    return (
      <form >
        <label htmlFor="minRating">Minimum Rating:</label>
        <input type="number" name="minRating" value={ this.state.minRating } onChange={ this.handleChange } min="0" max="9" placeholder="min"></input>
        <label htmlFor="maxRating">Maximum Rating:</label>
        <input type="number" name="maxRating" value={ this.state.maxRating } onChange={ this.handleChange } min="1" max="10" placeholder="max"></input>
      </form>
    )
  }
}
export default RatingFilter
