import {Buttons, Option} from './FeedbackOptions.styled';

export const FeedbackOptions = ({valuations, onLeaveFeedback}) => {
  return(
    <Buttons>
      {valuations.map(valuation => 
      <Option key = {valuation} onClick = {() => {onLeaveFeedback(valuation)}}>
        {valuation}
      </Option>)}
    </Buttons>
  );
}