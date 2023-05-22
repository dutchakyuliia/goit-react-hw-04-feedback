import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Statistics extends Component {
render() {
    return (
      <ul>
        <li>Good : {this.props.good}</li>
        <li>Neutral : {this.props.neutral}</li>
        <li>Bad : {this.props.bad}</li>
        <li>Total : {this.props.good + this.props.neutral + this.props.bad} </li>
        <li>
          Positive feedback : 
          {Math.round((100 * this.props.good) / (this.props.good + this.props.neutral + this.props.bad)) || 0}  %
        </li>
      </ul>
    );
  }
}

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};