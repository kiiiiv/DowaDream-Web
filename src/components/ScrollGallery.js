import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../봉사.jpg';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import image1 from '../봉사.jpg';
import image2 from '../배경.jpg';
import image3 from '../봉사.jpg';
import image4 from '../배경.jpg';
import image5 from '../봉사.jpg';

const Gallery = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 390px;
  width: 100%;
  margin: 0 auto;

  &::-webkit-scrollbar {
    height: 19px;
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #ccc;
    height: 6px;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const images = [image1, image2, image3, image4, image5];

function ScrollGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (galleryRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = galleryRef.current;

        if (scrollLeft === scrollWidth - offsetWidth) {
          galleryRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    }

    const interval = setInterval(handleScroll, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Gallery ref={galleryRef}>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index}`} />
      ))}
    </Gallery>
  );
}

export default ScrollGallery;
/*function ScrollGallery() {
  return (
    <>
        <Container50>
            <Image></Image>
            <Image></Image>
            <Image></Image>
            <Image></Image>
            <Image></Image>
        </Container50>
        <Container51>
            <ScrollBar></ScrollBar>
        </Container51>
    </>
  );
}

export default ScrollGallery;

let Container50 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;

    width: 1905px;
    height: 365px;
`;
let Image = styled.div`
    width: 365px;
    height: 365px;
    background: url(Checker.png);
`;
let Container51 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0px 0px;
    gap: 8px;

    width: 400px;
    height: 27px;
`;
let ScrollBar = styled.div`
    width: 400px;
    height: 19px;
    background: #424242;
    border-radius: 20px;
`;
*/
