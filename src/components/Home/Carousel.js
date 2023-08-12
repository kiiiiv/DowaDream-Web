import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../../봉사.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className="main-bg" style={{ backgroundImage : 'url(' + pic + ')' }}></div>
        <Carousel.Caption>
            <p>1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="main-bg" style={{ backgroundImage : 'url(' + pic + ')' }}></div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="main-bg" style={{ backgroundImage : 'url(' + pic + ')' }}></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="main-bg" style={{ backgroundImage : 'url(' + pic + ')' }}></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="main-bg" style={{ backgroundImage : 'url(' + pic + ')' }}></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
