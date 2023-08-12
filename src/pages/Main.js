import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from '../components/Home/Carousel';
import TagButton from '../components/TagButton.js';
import styled from 'styled-components';
import InfoTitle from '../components/Home/InfoTitle';
import InfoItem from '../components/Home/InfoItem';
import { Wrapper } from '../styles/Common';
function Main(){

    return(
    <Wrapper>
      
      <ControlledCarousel/>


      <Infowrapper>

        <div>
          <HeaderWrapper>
              <h3>  님! 어떤 봉사정보 추천을 원하시나요?{'\n'}</h3>
          </HeaderWrapper>
          <ButtonWrapper>
            <TagButton text="관심 태그 & 지역" to="/tagregionAll"></TagButton>
            <TagButton text="신규" to="/new"></TagButton>
            <TagButton text="인기" to="/famousAll"></TagButton>
          </ButtonWrapper>
        </div>

          <Infoitem>
            <Itemtitle>
              <InfoTitle num={1}></InfoTitle>
            </Itemtitle>
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>

          <Infoitem>
            <Itemtitle>
              <InfoTitle num={2}></InfoTitle>
            </Itemtitle>
              <Iteminfo>
                <InfoItem></InfoItem>
                <InfoItem></InfoItem>
                <InfoItem></InfoItem>
                <InfoItem></InfoItem>
              </Iteminfo>
          </Infoitem>

          <Infoitem>
            <Itemtitle>
              <InfoTitle num={3}></InfoTitle>
            </Itemtitle>    
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>

      </Infowrapper>


  
    </Wrapper>
    );
  }
  export default Main;


const HeaderWrapper = styled.div`

  margin-top : 40px;

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


const Infoitem = styled.div`


  display : flex;

  flex-direction: column;
  justify-content : space-between;
  align-items : flex-start;

  width : 100%;
  height : 59.5em;

`

const Itemtitle = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: bottom;
  
  width: 100%;
  height: 5.3em;
  margin: 10px 0px;
  



`

const Iteminfo = styled.div`


  width: 100%;
  flex : 1;
  display: flex;
  align-items: flex-start;
  gap: 2em;

`

const Infowrapper = styled.div`

  display : flex;
  flex-direction: column;


  width : 100%;
  height : 270.2em;

  gap : 8em;

`
