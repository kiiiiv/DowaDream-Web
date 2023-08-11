import { useEffect, useState } from 'react';
import { Wrapper } from '../styles/Common';
import React from 'react';
import styled from 'styled-components';
import MyVolunteerMy from './MyVolunteerMy';
import MyVolunteerScrap from './MyVolunteerScrap';

function MyVolunteerNavbar() {
  const [showVolunteerMy, setShowVolunteerMy] = useState(false);
  const [showVolunteerScrap, setShowVolunteerScrap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'myvolunteer') {
      setShowVolunteerMy(true);
      setShowVolunteerScrap(false);
    } else if (category === 'myscrap') {
      setShowVolunteerMy(false);
      setShowVolunteerScrap(true);
    } else {
      setShowVolunteerMy(false);
      setShowVolunteerScrap(false);
    }
  };

  return (  <>
      <Container40>
        <Category
          style={selectedCategory === 'myvolunteer' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('myvolunteer')}
        >
          내가 한 봉사
        </Category>
        <Category
          style={selectedCategory === 'myscrap' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('myscrap')}
        >
          스크랩한 봉사
        </Category>

        </Container40>
        {showVolunteerMy && <MyVolunteerMy />}
        {showVolunteerScrap && <MyVolunteerScrap />}
        </> 
  )
}

export default MyVolunteerNavbar;
const Container40 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
padding: 0px;
width: 100%;
height: 69px;
border-bottom: 2px solid #A0A0A0;
background-color: pink;
`;

const Category = styled.button`

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 69px;
flex-grow: 1;
/* Gray Color */
border-width: 2px 0px;
border-style: solid;
border-color: #A0A0A0;
background-color: white;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #A0A0A0;
&:hover {
  cursor: pointer;
  color: #024959;
  font-weight: 700;
}
`;