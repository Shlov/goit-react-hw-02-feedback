import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {Option} from './Feedback.styled';


const firstLetterToUppercase = (str) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

const ch = firstLetterToUppercase('name')
console.log(ch);


export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  toVote (option) {
      this.setState(state => ({[option]: (state[option] + 1)}));
  }
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a,b) => {return a+b}, 0);
  }

  countPositiveFeedbackPercentage () {
    console.log(Object.values(this.state).reduce((a,b) => {return a+b}, 0));
    console.log(this.state.good);
    // console.log();
    const total = Object.values(this.state).reduce((a,b) => {return a+b}, 0);
    const positive = this.state.good
    return total ? (positive / total * 100) : '0'
  }
  
  render () {
    const options = this.props.valuations
    
    return (
      <>
        <h2>Please leave feedback</h2>
        {options.map(option => 
        <Option onClick = {() => {this.toVote(option)}} name = {option}>{firstLetterToUppercase(option)}</Option>)}
        <h3>Statistics</h3>
        {options.map(option => 
          <p>{firstLetterToUppercase(option)}: {this.state[option]}</p>)}
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive: {this.countPositiveFeedbackPercentage()}</p>
      </>
    )
  }
}