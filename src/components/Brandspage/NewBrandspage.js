// import React from "react";
// import mshimg from "../../Images/image 55.png";
// import Shoppage from "../Shoppages/Shoppage";
// import bimg1 from "../../Images/ELLE___VIRE-copy-125x125 1.png";
// import bimg2 from "../../Images/dawn-copy-125x125 1.png";
// import bimg3 from "../../Images/DIRA-copy-125x125 1.png";
// import bimg4 from "../../Images/delta 1.png";
// import bimg5 from "../../Images/CELEBRE-copy-125x125 1.png";
// import bimg6 from "../../Images/ELLE___VIRE-copy-125x125 1.png";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const NewBrandspage = () => {
//   const data = [
//     { id: 1, image: bimg1 },
//     { id: 2, image: bimg2 },
//     { id: 3, image: bimg3 },
//     { id: 4, image: bimg4 },
//     { id: 5, image: bimg5 },
//     { id: 6, image: bimg6 },
//   ];
//   const navigate = useNavigate();
//   // Function to navigate to the '/shoppage' route
//   const handleclick = () => {
//     window.scrollTo(0, 0);
//     navigate("/shoppage");
//   };

//   return (
//     <div className="newbrands">
//       <div className="position-relative">
//         <img src={mshimg} width="100%" style={{ height: "250px" }} />
//         <h3
//           className="position-absolute top-50 start-50 translate-middle"
//           style={{ color: "white" }}
//         >
//           Brands
//         </h3>
//       </div>
//       <Container className="mt-2">
//         <Row lg={3} md={2} xs={1} className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
//           {data.map((ele, i) => {
//             return (
//               <>
//                 <Col>
//                   <Card className=" mt-2 mb-2">
//                     <center>
//                       <Card.Img
//                         className="pt-3 pb-3 px-5 "
//                         src={ele.image}
//                         width="200px"
//                         height="150px"
//                         onClick={handleclick}
//                       />
//                     </center>
//                   </Card>
//                 </Col>
//               </>
//             );
//           })}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default NewBrandspage;

// // brnd names and subbrandsnames

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchBrands } from "../../actions"; // Import the fetchBrands action

// import mshimg from "../../Images/image 55.png";
// import { Card, Col, Container, Row } from "react-bootstrap";

// const NewBrandspage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Fetch brands data from Redux store
//   const brandsData = useSelector((state) => state.brands.brandsData);

//   // Function to navigate to the '/shoppage' route
//   const handleclick = () => {
//     window.scrollTo(0, 0);
//     navigate("/shoppage");
//   };

//   // Fetch brands data when the component mounts
//   useEffect(() => {
//     dispatch(fetchBrands());
//   }, [dispatch]);

//   return (
//     <div className="newbrands">
//       <div className="position-relative">
//         <img src={mshimg} width="100%" style={{ height: "250px" }} />
//         <h3
//           className="position-absolute top-50 start-50 translate-middle"
//           style={{ color: "white" }}
//         >
//           Brands
//         </h3>
//       </div>
//       <Container className="mt-2">
//         <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
//           {brandsData.map((brand) => (
//             <Col key={brand.Brand_id}>
//               <Card className=" mt-2 mb-2">
//                 <center>
//                   <Card.Img
//                     className="pt-3 pb-3 px-5 "
//                     src={brand.Brand_image} // Use the brand image here
//                     width="200px"
//                     height="150px"
//                     onClick={handleclick}
//                   />
//                   <Card.Body>
//                     <Card.Title>{brand.Brand_Name}</Card.Title>
//                   </Card.Body>
//                 </center>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         {brandsData.map((brand) => (
//           <div key={brand.Brand_id}>
//             {brand.hasSubcat && (
//               <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
//                 {brand.subcategories.map((subcat) => (
//                   <Col key={subcat.Subcat_id}>
//                     <Card className=" mt-2 mb-2">
//                       <center>
//                         <Card.Body>
//                           <Card.Title>{subcat.Subcat_Name}</Card.Title>
//                         </Card.Body>
//                       </center>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>
//             )}
//           </div>
//         ))}
//       </Container>
//     </div>
//   );
// };

// export default NewBrandspage;

//only brands names
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBrands } from "../../actions"; // Import the fetchBrands action

import mshimg from "../../Images/image 55.png";
import { Card, Col, Container, Row } from "react-bootstrap";

const NewBrandspage = () => {
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
          {brandsData.map((brand) => (
            <Col key={brand.Brand_id}>
              <Card className=" mt-2 mb-2">
                <center>
                  <Card.Title>{brand.Brand_Name}</Card.Title>
                  <Card.Img
                    className="pt-3 pb-3 px-5 "
                    src={brand.Brand_image} // Use the brand image here
                    width="200px"
                    height="150px"
                    onClick={handleclick}
                  />
                </center>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NewBrandspage;
