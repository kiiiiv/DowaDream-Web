import { Wrapper } from "../../../styles/Common";
import InfoItem from '../../Home/InfoItem';
import { styled } from 'styled-components';
import { uploadUserVol } from '../../../apis/Program/ProgramInfo'; 
import { getVolDetail } from "../../../apis/VolInfo/VolInfo";
import { useEffect, useState } from "react";
//내가 한 봉사
//getVolDetail
function MyVolunteerMy(){
  const [myVolunteer, setMyVolunteer] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const abc = await uploadUserVol();
        console.log(abc)
        const myVolunteerArr = [];
        for (let i = 0; i < abc.length; i++) {
          const detailVolunteer = await getVolDetail(abc[i]);
          console.log(detailVolunteer);
          myVolunteerArr.push(
            <InfoItem

              onClick={() => {
                // progrmRegistNo 값이 없다면 '/info/default'로, 값이 있다면 `/info/${detailVolunteer.progrmRegistNo}`로 이동
                const targetPath = detailVolunteer.progrmRegistNo
                  ? `/info/${detailVolunteer.progrmRegistNo}`
                  : '/info/default';
              window.location.href = targetPath;
            }}

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
        setMyVolunteer(myVolunteerArr);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(1)
    fetchData();
  }, []);
    return (
      <>
        <Infoitem>
            <Iteminfo>
            {myVolunteer.map((volunteerItem) => volunteerItem)}
              
            </Iteminfo>
          </Infoitem>
          

      </>
    );
  }
  
  export default MyVolunteerMy;
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