
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBrands } from "../../actions";
import mshimg from "../../Images/image 55.png";
import { Card, Col, Container, Row } from "react-bootstrap";

const NewBrandspage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const brandsData = useSelector((state) => state.brands.brandsData);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    if (brand.hasSubcat) {
      setSelectedBrand(brand);
    } else {
      setSelectedBrand(null); // Clear the selectedBrand to show only sub-brands
      // Handle the case when there are no sub-brands (e.g., show products)
      // You can navigate to a different page or render the products here.
    }
  };

  return (
    <div className="newbrands">
      <div className="position-relative">
        <img
          src={mshimg}
          width="100%"
          style={{ height: "250px" }}
          alt="Brand Image"
        />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          Brands
        </h3>
      </div>
      <Container className="mt-2">
        {selectedBrand && selectedBrand.hasSubcat ? (
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
            {selectedBrand.subcategories.map((subcat) => (
              <Col key={subcat.Subcat_id}>
                <Card className=" mt-2 mb-2">
                  <center>
                    <Card.Body>
                      <Card.Title>{subcat.Subcat_Name}</Card.Title>
                    </Card.Body>
                  </center>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
            {brandsData.map((brand) => (
              <Col key={brand.Brand_id}>
                <Card
                  className=" mt-2 mb-2"
                  onClick={() => handleBrandClick(brand)}
                >
                  <center>
                    <Card.Img
                      className="pt-3 pb-3 px-5 "
                      src={brand.Brand_image}
                      width="200px"
                      height="150px"
                      alt={brand.Brand_Name}
                    />
                    <Card.Body>
                      <Card.Title>{brand.Brand_Name}</Card.Title>
                    </Card.Body>
                  </center>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default NewBrandspage;
