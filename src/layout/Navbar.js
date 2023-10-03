import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  searchProducts,
  fetchBrands, // Import the fetchBrands action
  setSelectedBrand, // Import the setSelectedBrand action
  setSelectedSubcat, // Import the setSelectedSubcat action
} from "../actions";

import "./Navbar.css";
import {
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
const Navbar = ({ handleShow2 }) => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setSearchExpanded] = useState(false);


  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false); // Track brand dropdown state
  const searchInputRef = React.useRef(null); // Reference to the search input element
  const navigate = useNavigate();


  const brandsData = useSelector((state) => state.brands.brandsData);
  const selectedBrand = useSelector((state) => state.brands.selectedBrand);
  const selectedSubcat = useSelector((state) => state.brands.selectedSubcat);

  useEffect(() => {
    // Fetch brand data from the API
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleBrandChange = (brand) => {
    dispatch(setSelectedBrand(brand.Brand_id));
    navigate(`/brands/${brand.Brand_id}`); // Navigate to brand details
  };

  const handleSubcatChange = (subcat) => {
    const subcatId = subcat.Subcat_id;
    // Use the useNavigate hook to navigate to the subcategory details page
    navigate(`/subcategories/${subcatId}`);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    setSearchQuery(query); // Update the local state
    dispatch(searchProducts(query)); // Dispatch the search action

    if (query.trim() !== "") {
      // Only navigate when there is a non-empty search query
      navigate(`/search-results?search=${query}`);
    } else {
      // Handle the case when the search query is empty or cleared
      // You can navigate to a different page or perform another action here
    }
  };

  const toggleSearchBar = () => {
    setSearchExpanded(!isSearchExpanded);
  };

  // Handle clicks outside of the search bar to hide it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearchExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //handleclick for moving brands page
  const handlclick = () => {
    navigate("/brandspage");
  };



  return (
    <nav className="navbar navbar-expand-lg navbar headerbar mt-lg-4 mb-lg-4">
      <div className="container">
        <Link
          to="/"
          className="nav-item navbrand d-flex me-xxl-5"
          style={{ textDecoration: "none" }}
        >
          <h4>Elite Enterprise</h4>
        </Link>
        <span
          id="navbtn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-xl-5 ">
            <li className="nav-item px-xl-2">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item px-xl-2">
              <Link to="/team" className="nav-link">
                Team
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link to="/shoppage" className="nav-link">
                Shop
              </Link>
            </li>

            <NavDropdown
              title={<span onClick={handlclick}>Brands</span>}
              // title="Brands"
              className="basic-nav-dropdown"
              // onClick={handlclick}
              id="basic-nav-dropdown"
              show={isBrandDropdownOpen}
              onMouseEnter={() => setIsBrandDropdownOpen(true)}
              onMouseLeave={() => setIsBrandDropdownOpen(false)}
            >
              {/* <NavDropdown.Item as={Link} to="/brandspage">
                All Brands
              </NavDropdown.Item> */}
              {brandsData.map((brand) => (
                <div key={brand.Brand_id}>
                  {brand.hasSubcat ? (
                    <DropdownButton
                      as={ButtonGroup}
                      className="transparent-bg navdropdownbrandname"
                      id={`dropdown-brand-${brand.Brand_id}`}
                      title={
                        <span onClick={() => handleBrandChange(brand)}>
                          {brand.Brand_Name}
                        </span>
                      }
                    >
                      {brand.subcategories.map((subcat) => {
                        if (subcat && subcat.Subcat_id) {
                          return (
                            <Dropdown.Item
                              key={subcat.Subcat_id}
                              eventKey={subcat.Subcat_id}

                              // onSelect={() => handleSubcatChange(subcat)} // Pass the entire subcat object
                            >
                              <Link
                                to={`/subcategories/${subcat.Subcat_id}`}
                                className="nav-link navdroplink"
                              >
                                {subcat.Subcat_Name}
                              </Link>
                            </Dropdown.Item>
                          );
                        } else {
                          return null; // Skip rendering if subcat or Subcat_id is undefined
                        }
                      })}
                    </DropdownButton>
                  ) : (
                    <NavDropdown.Item onClick={() => handleBrandChange(brand)}>
                      {brand.Brand_Name}
                    </NavDropdown.Item>
                  )}
                </div>
              ))}
            </NavDropdown>
            {/* </li> */}
            <li className="nav-item px-xl-2">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link to="/blog" className="nav-link">
                Blogs
              </Link>
            </li>

            <div
              className={`input-group mb-lg-0 mb-2 col ${
                isSearchExpanded ? "expanded" : ""
              }`}
              onClick={toggleSearchBar}
              ref={searchInputRef}
            >
              {isSearchExpanded && (
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="form-control rounded-pill ms-xl-4"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(e);
                    }
                  }}
                  onClick={(e) => {
                    // Prevent click propagation to the parent div
                    e.stopPropagation();
                  }}
                />
              )}
              &nbsp;
              <div>
                <AiOutlineSearch
                  className={`rounded-circle p-2 ${
                    isSearchExpanded ? "expanded-icon" : ""
                  }`}
                  style={{
                    width: "38px",
                    height: "38px",
                    color: "white",
                    background: "#E2CBA3",
                  }}
                />
              </div>
            </div>

            <li
              className="nav-item px-lg-2  rounded-pill ms-xl-4 my-3 my-lg-0 my-md-0"
              style={{ border: "1px solid #E0E0E0" }}
            >
              <Link to="/cart" className="nav-link ">
                <i
                  className="fas fa-shopping-cart rounded-circle p-1"
                  style={{ background: "#44160F", color: "white" }}
                ></i>
                <span className="px-3">Cart-({totalQuantity})</span>
                {/* <span className="badge rounded-pill badge-notification bg-primary">{totalQuantity}</span> */}
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto justify-content-end ">
            <li className="nav-item ">
              <Link to="/login" onClick={handleShow2} className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
