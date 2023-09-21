import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBrands } from "../../actions"; // Import the fetchBrands action
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./Brandsslide.css";
import bimg1 from "../../Images/ELLE___VIRE-copy-125x125 1.png";
import bimg2 from "../../Images/dawn-copy-125x125 1.png";
import bimg3 from "../../Images/DIRA-copy-125x125 1.png";
import bimg4 from "../../Images/delta 1.png";
import bimg5 from "../../Images/CELEBRE-copy-125x125 1.png";
import bimg6 from "../../Images/ELLE___VIRE-copy-125x125 1.png";
import bimg7 from "../../Images/dawn-copy-125x125 1.png";
import bimg8 from "../../Images/DIRA-copy-125x125 1.png";
import bimg9 from "../../Images/delta 1.png";
import bimg10 from "../../Images/CELEBRE-copy-125x125 1.png";
const Brandsslide = () => {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black", // Text color
          fontSize: "24px", // Adjust the font size as needed
        }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  };

  // Custom next arrow component
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black", // Text color
          fontSize: "24px", // Adjust the font size as needed
        }}
        onClick={onClick}
      >
        <FaAngleRight />
      </div>
    );
  };

  const data = [
    { id: 1, image: bimg1 },
    { id: 2, image: bimg2 },
    { id: 3, image: bimg3 },
    { id: 4, image: bimg4 },
    { id: 5, image: bimg5 },
    { id: 6, image: bimg6 },
    { id: 7, image: bimg7 },
    { id: 8, image: bimg8 },
    { id: 9, image: bimg9 },
    { id: 10, image: bimg10 },
  ];

  // Number of cards to show per slide
  const slidesToShow = 2;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // Extra-large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // iPad mini and similar small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch brands data from Redux store
  const brandsData = useSelector((state) => state.brands.brandsData);

  // Function to navigate to the '/shoppage' route
  const handleclick = () => {
    window.scrollTo(0, 0);
    navigate("/shoppage");
  };

  // Fetch brands data when the component mounts
  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <div className="brandsliding">
      {/* <Container className="brandspage2 pb-5 pt-5">
        <Row className="justify-content-between text-center textlg-start mt-5 pt-lg-5 pb-4">
          <Col lg="3" xs="12" md="5">
            <p>Brands</p>
            <h3>Our Brand Partners</h3>
          </Col>

          <Col lg="3" xs="12" md="5">
            <button className="px-4 p-3 text-center">
              View All Brands Now&nbsp;
              <FaArrowRight
                className="ms-2 rounded-circle  text-black p-1"
                style={{ backgroundColor: "#FFDAA9" }}
              />
            </button>
          </Col>
        </Row>
        <hr />
      </Container> */}

      <div className="container">
        <Container className="mt-2">
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
            <Slider {...settings}>
              {brandsData.map((brand) => (
                <Col key={brand.Brand_id}>
                  <Card className=" mt-2 mb-2 mx-lg-5">
                    <center>
                      <Card.Img
                        className="pt-3 pb-3 px-5 "
                        src={brand.Brand_image} // Use the brand image here
                        // width="200px"
                        height="150px"
                      />
                      <Card.Title>{brand.Brand_Name}</Card.Title>
                    </center>
                  </Card>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
        {/* {data.map((ele) => (
            <div key={ele.id}>
              <div className="mx-3 px-lg-2 pt-3 pb-5">
                <img
                  className="pt-3 pb-3"
                  src={ele.image}
                  width="200px"
                  height="150px"
                />
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Brandsslide;
