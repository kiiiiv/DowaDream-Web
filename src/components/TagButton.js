import styled from 'styled-components';
import { Link } from 'react-router-dom';

function TagButton({text, to}) {
  return (
    <>
      <StyledButton>
      <Link to={to}>{text}</Link>
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
  fontSize: 14, 
  fontWeight: 'normal'
`;

