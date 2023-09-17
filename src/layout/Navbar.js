import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, searchProducts } from "../actions";
import "./Navbar.css";
import {
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setSearchExpanded] = useState(false);

  const [brandsData, setBrandsData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedSubcat, setSelectedSubcat] = useState("");
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false); // Track brand dropdown state
  const searchInputRef = React.useRef(null); // Reference to the search input element
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch brand data from the API
    fetch("https://64c37c1ceb7fd5d6ebd0ebc4.mockapi.io/brands")
      .then((response) => response.json())
      .then((data) => setBrandsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand.Brand_id);
    setSelectedSubcat(""); // Clear sub-category when a brand is changed
  };
  const handleSubcatChange = (subcat) => {
    setSelectedSubcat(subcat.Subcat_Name);
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
    navigate("/brands");
  };

  // const handleSearch = () => {
  //   dispatch(searchProducts(searchQuery));
  // };

  // const clearSearch = () => {
  //   dispatch(searchProducts('')); // Clear the search query
  //   setSearchQuery(''); // Clear the local state
  // };

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
              title="Brands"
              className="basic-nav-dropdown"
              onClick={handlclick}
              id="basic-nav-dropdown"
              show={isBrandDropdownOpen}
              onMouseEnter={() => setIsBrandDropdownOpen(true)}
              onMouseLeave={() => setIsBrandDropdownOpen(false)}
            >
              {brandsData.map((brand) => (
                <div key={brand.Brand_id}>
                  {brand.hasSubcat ? (
                    <DropdownButton
                      as={ButtonGroup}
                      className="transparent-bg navdropdownbrandname" // Add a class to make the background transparent
                      id={`dropdown-brand-${brand.Brand_id}`}
                      title={brand.Brand_Name}
                      onSelect={() => handleBrandChange(brand)}
                    >
                      {brand.Subcat_Names.map((subcat) => (
                        <Dropdown.Item
                          key={subcat.Subcat_Name}
                          eventKey={subcat.Subcat_Name}
                          onSelect={() => handleSubcatChange(subcat)}
                        >
                          {subcat.Subcat_Name}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  ) : (
                    <NavDropdown.Item onClick={() => handleSubcatChange(brand)}>
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
        </div>
        <div>
          <ul className="navbar-nav ms-xl-5 ">
            <li className="nav-item px-xl-2">
              <Link to="/login" className="nav-link">
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
