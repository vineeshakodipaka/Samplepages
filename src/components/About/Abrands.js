import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-bootstrap';
import bimg1 from '../../Images/ELLE___VIRE-copy-125x125 1.png';
import bimg2 from '../../Images/dawn-copy-125x125 1.png';
import bimg3 from '../../Images/DIRA-copy-125x125 1.png';
import bimg4 from '../../Images/delta 1.png';
import bimg5 from '../../Images/CELEBRE-copy-125x125 1.png';
import bimg6 from '../../Images/ELLE___VIRE-copy-125x125 1.png';
import bimg7 from '../../Images/dawn-copy-125x125 1.png';
import bimg8 from '../../Images/DIRA-copy-125x125 1.png';
import bimg9 from '../../Images/delta 1.png';
import bimg10 from '../../Images/CELEBRE-copy-125x125 1.png';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Abrands.css'


    // brand slide -2 section images
const images = [bimg1, bimg2, bimg3, bimg4, bimg5,bimg6,bimg7,bimg8,bimg9,bimg10];
const Abrands = () => {

    // brand slide -2 section
    const itemsPerSlide = 5;

    const renderImageSlides = () => {
      const slides = [];
      for (let i = 0; i < images.length; i += itemsPerSlide) {
        const slideItems = images.slice(i, i + itemsPerSlide).map((imgSrc, index) => (
          <div key={index} className="col-md-2">
            <img src={imgSrc} alt={`Image ${index}`} className="img-fluid" width="250px"  />
          </div>
        ));
  
        slides.push(
          <Carousel.Item key={i}>
           <center>
           <div className="row justify-content-around px-md-5 mx-md-5 pt-5 mt-5  pb-5">{slideItems}</div>
           </center>
          </Carousel.Item>
        );
      }
      return slides;
    };




  return (
    <div  style={{backgroundColor:"#FFF7EF"}}>


    {/* Our Brand Partners in about page*/}
    <Container className='brandspage2 pb-5 pt-5'>
      <Row className="justify-content-between text-center textlg-start mt-5 pt-lg-5 pb-4">
        <Col  lg="3" xs="12" md="5">
        <p>Brands</p>
        <h3>Our Brand Partners</h3>
        </Col>
   
        <Col  lg="3" xs="12"  md="5">
        <button className='px-4 p-3 text-center'>View All Brands Now &nbsp;
        <FaArrowRight className="ms-2 rounded-circle  text-black p-1" style={{backgroundColor: '#FFDAA9'}} />
        </button>
        </Col>
      </Row>
     <hr/>
    </Container>

    {/* brand slide -2 section */}
    <Carousel interval={null} indicators={false}   nextIcon={<BsChevronRight style={{ color: 'black' }} />} prevIcon={<BsChevronLeft style={{ color: 'black' }}/>}>
        {renderImageSlides()}
      </Carousel>
    </div>
  )
}

export default Abrands
