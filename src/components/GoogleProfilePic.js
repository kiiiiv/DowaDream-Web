import React from 'react'
import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components';
import pic from '../프로필.jpg'

const GoogleProfilePic = (props) => {
    const { size } = props;
  
    return (
      <BackgroundProfile size={size}></BackgroundProfile>
    )
  }

export default GoogleProfilePic;
const BackgroundProfile = styled.div`
width: ${props => props.size}px;
height: ${props => props.size}px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
background: url(${pic});
border-radius: 50%;
`;