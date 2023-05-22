import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statictics';
import Section from './Section/Section';
import React, { Component } from 'react';
import Notification from './Statictics/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  handleClick = name => () => {
     console.log(name)
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options = {Object.keys(this.state)}  onLeaveFeedback={this.handleClick}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
  }
}
