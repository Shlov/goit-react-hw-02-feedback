import {Option} from './FeedbackOptions.styled';

export const FeedbackOptions = ({valuations, onLeaveFeedback, onUppercase}) => {
  // console.log(this.state)
  return(
    <>
      {valuations.map(valuation => 
      <Option key = {valuation} onClick = {(valuation) => {onLeaveFeedback(valuation)}} name = {valuation}>{onUppercase(valuation)}
      </Option>)}
    </>
  );

  

}