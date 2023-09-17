import React, { useEffect, useState } from "react";
import imga from "../../Images/image-2.png";
import imgb from "../../Images/image-3.png";
import imgc from "../../Images/chocolate 1.png";
import "./Imgsfile.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos"; // AOS library for animations
import "aos/dist/aos.css"; // AOS library CSS

const Imgsfile = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook for navigation

  // Function to navigate to the '/shoppage' route
  const handleclick = () => {
     window.scrollTo(0, 0);
    navigate("/shoppage");
  };

  // Initialize AOS library for animations on component mount
  useEffect(() => {
    AOS.init();
  }, []);


    // const [imageData, setImageData] = useState([
    //   {
    //     imgSrc: imga,
    //     caption1: "Natural!!",
    //     caption2: "Get Garden Fresh Fruits",
    //   },
    //   {
    //     imgSrc: imgb,
    //     caption1: "Another Caption",
    //     caption2: "More Information",
    //   },
    //   // Add more objects as needed
    // ]);


    const [imageData, setImageData] = useState([])
    useEffect(()=>{
      fetch(
        "https://paradox122.000webhostapp.com/_API/Home_Below_Slider_Images_API.php"
      )
      .then((resp)=>resp.json())
      .then((data)=>setImageData(data))
      ;
    },[])
  return (
    <div className="imgsgrid mt-4 pt-lg-4">
      <div className="container">
        <div className="row">
          {imageData.map((item, index) => (
            <div
              key={index}
              data-aos={index === 0 ? "fade-right" : "fade-left"} // Apply different animations based on the index
              className="col-sm-12 mt-2 col-lg-6 col-md-6"
            >
              <div className="position-relative">
                <img
                  className="card-img-top rounded-4 chocoimg"
                  src={item.url}
                  width="100%"
                  alt={`Image ${index + 1}`}
                />
                <div
                  data-aos={index === 0 ? "fade-left" : "fade-right"} // Apply different animations based on the index
                  className="freshfriuts position-absolute top-50 start-50 translate-middle text-white"
                >
                  <p className="natural">{item.caption}</p>
                  <h4>{item.content}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-md-5  px-lg-5">
          {/* Third image with animation */}
          <div
            data-aos="fade-right"
            className="col-sm-12 col-lg-6 col-lg-6 col-md-6 px-lg-5"
          >
            <div>
              <img className="card-img-top  px-lg-5" src={imgc} width="100%" />
            </div>
          </div>
          {/* Text and button section with animation */}
          <div
            data-aos="fade-left"
            className="col-sm-12 col-lg-6 col-lg-6 col-md-6 "
          >
            <div className="mt-lg-5 ">
              <p className="p1 fs-4">About As</p>
              <h3>We Believe in Working Accredited Farmers</h3>
              <p className="p2">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <h6 className="mt-lg-4">Organic Foods Only</h6>
              <p className="p2">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <button className="px-4 p-3 text-center" onClick={handleclick}>
                Shop Now &nbsp;
                <FaArrowRight
                  className="ms-2 rounded-circle  text-black p-1"
                  style={{ backgroundColor: "#FFDAA9" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imgsfile;
