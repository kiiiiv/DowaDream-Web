import { Wrapper } from "../styles/Common";
import InfoItem from './Home/InfoItem';
import { styled } from 'styled-components';

function MyVolunteerMy(){
    return (
      <>
        <Infoitem>
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>
          <Infoitem>
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>

            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>

      </>
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


const Iteminfo = styled.div`


  width: 100%;
  flex : 1;
  display: flex;
  align-items: flex-start;
  gap: 2em;

`