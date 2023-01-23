import { Component } from "react";


export class Statistics extends Component {

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a,b) => {return a+b}, 0);
  }

  countPositiveFeedbackPercentage () {
    const total = Object.values(this.state).reduce((a,b) => {return a+b}, 0);
    const positive = this.state.good
    return total ? (positive / total * 100) : '0'
  }
  
  render () {
    const options = this.props.valuations
    console.log(this.props)
    
    return (
      <>
        {options.map(option => <p>{this.firstLetterToUppercase(option)}: {this.state[option]}</p>)}
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive: {this.countPositiveFeedbackPercentage()}</p>
      </>
    )
  }

}