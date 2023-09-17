import React from "react";
import mshimg from "../../Images/image 55.png";
import Shoppage from "../Shoppages/Shoppage";
import bimg1 from "../../Images/ELLE___VIRE-copy-125x125 1.png";
import bimg2 from "../../Images/dawn-copy-125x125 1.png";
import bimg3 from "../../Images/DIRA-copy-125x125 1.png";
import bimg4 from "../../Images/delta 1.png";
import bimg5 from "../../Images/CELEBRE-copy-125x125 1.png";
import bimg6 from "../../Images/ELLE___VIRE-copy-125x125 1.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewBrandspage = () => {
  const data = [
    { id: 1, image: bimg1 },
    { id: 2, image: bimg2 },
    { id: 3, image: bimg3 },
    { id: 4, image: bimg4 },
    { id: 5, image: bimg5 },
    { id: 6, image: bimg6 },
  ];
  const navigate = useNavigate();
  // Function to navigate to the '/shoppage' route
  const handleclick = () => {
    window.scrollTo(0, 0);
    navigate("/shoppage");
  };

  return (
    <div className="newbrands">
      <div className="position-relative">
        <img src={mshimg} width="100%" style={{ height: "250px" }} />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          Brands
        </h3>
      </div>
      <Container className="mt-2">
        <Row lg={3} md={2} xs={1} className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
          {data.map((ele, i) => {
            return (
              <>
                <Col>
                  <Card className=" mt-2 mb-2">
                    <center>
                      <Card.Img
                        className="pt-3 pb-3 px-5 "
                        src={ele.image}
                        width="200px"
                        height="150px"
                        onClick={handleclick}
                      />
                    </center>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default NewBrandspage;
