// BrandDetails.js

import React from "react";
import { useSelector } from "react-redux";

const BrandDetails = () => {
  const selectedBrand = useSelector((state) => state.brands.selectedBrand);
  const brandsData = useSelector((state) => state.brands.brandsData);

  // Find the selected brand in the brandsData array
  const brand = brandsData.find((brand) => brand.Brand_id === selectedBrand);

  if (!brand) {
    return <div>Loading...</div>; // Add a loading state or error handling as needed
  }

  return (
    <div>
      <h1>{brand.Brand_Name} Details</h1>
     
      {brand.hasSubcat && (
        <div>
          <h2>Subcategories:</h2>
          <ul>
            {brand.subcategories.map((subcat) => (
              <li key={subcat.Subcat_id}>{subcat.Subcat_Name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrandDetails;





// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Card } from "react-bootstrap";

// const BrandDetails = () => {
//   const { brandId } = useParams();
//   const brandsData = useSelector((state) => state.brands.brandsData);
//   const selectedBrand = brandsData.find((brand) => brand.Brand_id === brandId);

//   if (!selectedBrand) {
//     return <div>Brand not found</div>;
//   }

//   return (
//     <div className="container">
//       <Card>
//         <Card.Body>
//           <Card.Title>{selectedBrand.Brand_Name}</Card.Title>
//           <Card.Text>Description: {selectedBrand.Description}</Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default BrandDetails;
