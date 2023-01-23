import { Component } from "react";
// import { Feedback } from "./Feedback/Feedback";
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
const options = ['good', 'neutral', 'bad'];

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  // toVote (option) {
  //   this.setState(state => ({[option]: (state[option] + 1)}));
  // }

  toVote = (option) => {
    console.log(this.state)
    console.log(option)
    // this.setState(prevState => ({[option]: (prevState[option] + 1)}));
    // this.setState(prevState => ({good: (prevState[good] + 1)}));
  }

  firstLetterToUppercase = (str) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
  }

  render () {
    
    return (      
      // <Feedback valuations = {options} onLeaveFeedback = {this.toVote}/>
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions valuations={options} onLeaveFeedback={this.toVote} onUppercase = {this.firstLetterToUppercase}/>
      </Section>
      <Section title="Statistics">
        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
      </Section>
    </>
    );
  }
}
