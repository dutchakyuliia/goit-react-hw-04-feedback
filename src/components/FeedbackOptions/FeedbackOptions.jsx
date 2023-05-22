import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FeedbackOptions extends Component {
  render() {
    console.log(this.props.options)
    return (
     <div>
        {(this.props.options).map(reaction => {
          return (
            <button
              type="button"
              key={reaction}
              onClick={this.props.onLeaveFeedback(reaction)}
            >{reaction}</button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
