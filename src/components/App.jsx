import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statictics';
import Section from './Section/Section';
import React, { useState } from 'react';
import Notification from './Statictics/Notification';
export const App =() => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (option)  => {
  switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options = {Object.keys({good, neutral, bad})}  onLeaveFeedback={handleClick}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
  }
