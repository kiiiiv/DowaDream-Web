import { Wrapper } from "../../../styles/Common";
import InfoItem from '../../Home/InfoItem';
import { styled } from 'styled-components';
import { uploadUserClip } from '../../../apis/Program/ProgramInfo'; 
import { getVolDetail } from "../../../apis/VolInfo/VolInfo";
import { useEffect, useState } from "react";
function MyVolunteerScrap(){
  const [myScrap, setMyScrap] = useState([]);
  useEffect(() => {
    async function fetchScrap() {
      try {
        const abc = await uploadUserClip();
        const myScrapArr = [];
        for (let i = 0; i < abc.length; i++) {
          const detailVolunteer = await getVolDetail(abc[i]);
          console.log(detailVolunteer);
          myScrapArr.push(
            <InfoItem

            onClick={()=>{
              window.location.href=`/info/${detailVolunteer.progrmRegistNo}`}} 


              key={i} style={{ width:'25%'}}
              rid={detailVolunteer.title}
              tag={detailVolunteer.tag}
              updated_at={detailVolunteer.updated_at}
              progrmRegistNo={detailVolunteer.progrmRegistNo}
              title={detailVolunteer.title}
              content={detailVolunteer.content}
              images={detailVolunteer.images}
              is_public={detailVolunteer.is_public}
              is_customized={detailVolunteer.is_customized}
              num_cheer={detailVolunteer.num_cheer}
              num_comment={detailVolunteer.num_comment}
              writer={detailVolunteer.writer}
              writer_profile_img={detailVolunteer.writer_profile_img}
              writer_username={detailVolunteer.writer_username}
            >
            </InfoItem>
          );
        }
        setMyScrap(myScrapArr);
      } catch (error) {
        console.error(error);
      }
    }
    fetchScrap();
  }, []);
    return (
      <>
        <Infoitem>
            <Iteminfo>
              {myScrap.map((scrapItem) => scrapItem)}
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

justify-content : flex-start;
  width: 100%;
  flex : 1;
  display: flex;
  align-items: center;
  gap: 2em;

`