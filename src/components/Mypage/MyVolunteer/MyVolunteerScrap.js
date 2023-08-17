import { Wrapper } from "../../../styles/Common";
import InfoItem from '../../Home/InfoItem';
import { styled } from 'styled-components';
import { uploadUserClip } from '../../../apis/Program/ProgramInfo'; 
import { useEffect } from "react";
function MyVolunteerScrap(){
  useEffect(() => {
    async function fetchData() {
      try {
        await uploadUserClip();
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
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
          <Infoitem>
            <Iteminfo>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
              <InfoItem></InfoItem>
            </Iteminfo>
          </Infoitem>
        </>
    );
  }
  
  export default MyVolunteerScrap;
  const Infoitem = styled.div`
  display : flex;
  flex-direction: column;
  justify-content : space-between;
  align-items : center;
  width : 100%;
  height : 59.5em;
`


const Iteminfo = styled.div`

justify-content : center;
  width: 100%;
  flex : 1;
  display: flex;
  align-items: center;
  gap: 2em;

`