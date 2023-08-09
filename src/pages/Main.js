import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from '../components/Carousel';
import TagButton from '../components/TagButton.js';
import styled from 'styled-components';
function Main(){

    return(
    <div className='Wrapper'>
      
      <ControlledCarousel/>
        <HeaderWrapper>
          <h3>  님! 어떤 봉사정보 추천을 원하시나요?{'\n'}</h3>
        </HeaderWrapper>
        <ButtonWrapper>
        <TagButton text="관심 태그 & 지역" to="/tagregionAll"></TagButton>
        <TagButton text="신규" to="/new"></TagButton>
        <TagButton text="인기" to="/famousAll"></TagButton>
        </ButtonWrapper>
  
    </div>
    );
  }
  export default Main;


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 20px 0px 16px;
  gap: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;


