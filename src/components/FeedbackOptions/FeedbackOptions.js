import {Buttons, Option} from './FeedbackOptions.styled';

export const FeedbackOptions = ({valuations, onLeaveFeedback, onUppercase}) => {
  return(
    <Buttons>
      {valuations.map(valuation => 
      <Option key = {valuation} onClick = {() => {onLeaveFeedback(valuation)}}>
        {onUppercase(valuation)}
      </Option>)}
    </Buttons>
  );
}