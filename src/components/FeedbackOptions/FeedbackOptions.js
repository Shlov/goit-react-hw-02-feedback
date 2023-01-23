import {Option} from './FeedbackOptions.styled';

export const FeedbackOptions = ({valuations, onLeaveFeedback, onUppercase}) => {
  return(
    <>
      {valuations.map(valuation => 
      <Option key = {valuation} onClick = {() => {onLeaveFeedback(valuation)}}>
        {onUppercase(valuation)}
      </Option>)}
    </>
  );
}