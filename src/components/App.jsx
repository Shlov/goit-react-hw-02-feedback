import { Component } from "react";
// import { Feedback } from "./Feedback/Feedback";
import { Section } from 'components/Section/Section';

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics , Notification } from "./Statistics/Statistics";
const options = ['good', 'neutral', 'bad'];

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  toVote = (option) => {
    this.setState(prevState => ({[option]: (prevState[option] + 1)}));
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a,b) => {return a+b}, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce((a,b) => {return a+b}, 0);
    const positive = this.state.good
    return total ? (positive / total * 100).toFixed(2) : '0'
  }

  render () {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback;
    return (      
      // <Feedback valuations = {options} onLeaveFeedback = {this.toVote}/>
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          valuations={options}
          onLeaveFeedback={this.toVote}/>
      </Section>
      <Section title="Statistics">
        {total() ? <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}/>
        :<Notification
          message="There is no feedback"/>
        }
      </Section>
    </>
    );
  }
}
