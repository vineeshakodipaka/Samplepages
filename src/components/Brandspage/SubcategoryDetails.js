
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const SubcategoryDetails = () => {
  const { subcatId } = useParams();
  const brandsData = useSelector((state) => state.brands.brandsData);

  // Find the brand that contains the selected subcategory
  const selectedBrand = brandsData.find((brand) => {
    if (brand.subcategories) {
      return brand.subcategories.some(
        (subcat) => subcat.Subcat_id === subcatId
      );
    }
    return false;
  });

  // Find the selected subcategory within the selected brand
  const selectedSubcat = selectedBrand
    ? selectedBrand.subcategories.find(
        (subcat) => subcat.Subcat_id === subcatId
      )
    : null;

  if (!selectedSubcat) {
    // Handle the case when data is not available yet or subcategory doesn't exist
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>{selectedSubcat.Subcat_Name}</Card.Title>
          {/* Add any other subcategory details you want to display */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubcategoryDetails;
