import { Container } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <Container>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive: {positivePercentage()}</p>
    </Container>
  )
};

export const Notification = ({message}) => {
  return( 
    <Container>
      <h4>{message}</h4> 
    </Container>
  )
}
