import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import img1 from '../../Images/image-1.png';
import img2 from '../../Images/image-1.png';
import img3 from '../../Images/image-1.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Carouselfile.css';

const carouselData = [
  { src: img1, caption: 'We do Creative Things for Success', content: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard." },
  { src: img2, caption: 'We do Creative Things for Success', content:  "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard."  },
  { src: img3, caption: 'We do Creative Things for Success', content:  "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard."  }
];

const Carouselfile = () => {
  return (
    <div className='homecarousel'>
    <Carousel
      nextIcon={<BsChevronRight className='rightangle' style={{ color: 'black' }} />}
      prevIcon={<BsChevronLeft className='leftangle' style={{ color: 'black' }} />}
    >
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="position-relative">
            <img
              src={item.src}
              className="d-block w-100 h-100vh"
              style={{ height: "400px" }}
              alt={`Slide ${index + 1}`}
            />
            <div className="carousel-caption">
              <div className="caption-content  mb-5 pb-5 w-50 ">
                <h5 className='text-start' style={{ color: "#B27B60" }}>{item.caption}</h5>
                <p className='text-start' style={{ color: "#525C60" }}>{item.content}</p>
                <button className='d-flex justify-content-start px-4 p-1' >Shop now</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default Carouselfile;
