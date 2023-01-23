import { Title } from "./Section.styled";
// import { Section } from './Section.styled';


export const Section = ({title, children}) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
}

