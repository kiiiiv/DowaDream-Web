import { Wrapper } from "../styles/Common";
import InfoItem from './Home/InfoItem';
import { styled } from 'styled-components';

function MyVolunteerMy(){
    return (
      <Wrapper>
        <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
        </Iteminfo>
        <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
        </Iteminfo>
        <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
        </Iteminfo>
      </Wrapper> 
    );
  }
  
  export default MyVolunteerMy;
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