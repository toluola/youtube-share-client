import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background: ${props =>
    props.background ? "var(--mainGreen)" : "transparent"};
  border: 0.05rem solid "var(--mainDarking)";
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: ${props => `${props.paddingTopBottom} ${props.paddingLeftRight}`};
  border-radius: ${props => (props.borderRadius ? "none" : "0.5rem")};
  transition: all 0.2s ease-in-out;
  color: ${props => (props.background ? "white" : "var(--mainGreen)")};
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    background: ${props => (props.hover ? "var(--mainPurple)" : "transparent")};
    border-color: ${props =>
      props.hover ? "var(--mainPurple)" : "var(--mainGreen)"};
  }
  &:focus {
    outline: none;
  }
`;
