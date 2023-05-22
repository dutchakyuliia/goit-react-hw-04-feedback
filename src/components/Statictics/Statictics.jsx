import React  from 'react';
import PropTypes from 'prop-types';
const Statistics = ({good, neutral, bad }) => {
    return (
      <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total : {good + neutral + bad} </li>
        <li>
          Positive feedback : 
          {Math.round((100 * good) / (good + neutral + bad)) || 0}  %
        </li>
      </ul>
    );
  }

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};