import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {Option} from './Feedback.styled';




export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  
  render () {
    const options = this.props.valuations
    
    console.log(options);
    return (
      <>
        <h2>Please leave feedback</h2>
        {options.map(option => 
        <Option>{option}</Option>)}
        <p>dadads</p>
      </>
    )
  }
}