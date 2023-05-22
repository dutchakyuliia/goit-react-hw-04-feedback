import React  from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({options, onLeaveFeedback }) =>  {
    return (
     <div>
        {(options).map(reaction => {
          return (
            <button
              type="button"
              key={reaction}
              onClick={() =>(onLeaveFeedback(reaction))}
            >{reaction}</button>
          );
        })}
      </div>
    );
  }


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
