import styled from 'styled-components';
import { Link } from 'react-router-dom';

function TagButton({text,onClick}) {

  return (
    <>
      <StyledButton onClick={onClick}>
      <span>{text}</span>
      </StyledButton>
    </>
  );
}

export default TagButton;

const StyledButton = styled.div`
  
box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  width: 289px;
  height: 65px;
  background: #FFFAC9;
  border: 1px solid #000000;
  border-radius: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;

  font-size: 2.3em;
  color: var(--dark-gray-color, #7E8181);

  fontWeight: 'normal';
  cursor: pointer;
  transition: 0.2s; 


  &:hover {
    font-size: 2.6em;
    text-decoration-line: underline;
  }

`;

