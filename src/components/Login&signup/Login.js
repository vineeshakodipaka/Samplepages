// import React, { useState } from "react";

// import { Col, Form, Row } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login&signup.css";
// const Login = () => {
//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://paradox122.000webhostapp.com/_API/Login.php",
//         loginData,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       );

//       if (response.data.message === "Login successful") {
//         // Login successful, redirect to the home page
//         navigate("/home");
//       } else {
//         // Login failed, display an error message
//         alert("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle network errors or other exceptions
//       alert("Login failed. Please try again later.");
//     }
//   };
//   return (
//     <div className="logincls text-center">
//       <h3 className="fs-2 elite mt-5">Elite</h3>
//       <h4>E n t e r p r i s e s</h4>
//       <Row className="mt-5 pt-lg-5">
//         <h3 className="loginaccount">Login To Your Account</h3>
//         <Form className="loginform" onSubmit={submitHandler}>
//           <Row className="justify-content-center mt-3">
//             <Form.Group as={Col} md="4">
//               {/* <Form.Label>Last name</Form.Label> */}
//               <Form.Control
//                 type="username"
//                 name="username"
//                 value={loginData.username}
//                 onChange={changeHandler}
//                 required
//                 placeholder="username"
//                 className="inputgrp"
//               />
//             </Form.Group>
//           </Row>
//           <Row className="justify-content-center mt-4">
//             <Form.Group as={Col} md="4" className="inputgrp">
//               {/* <Form.Label>Last name</Form.Label> */}
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={loginData.password}
//                 onChange={changeHandler}
//                 required
//                 placeholder="Password"
//               />
//             </Form.Group>
//           </Row>
//           <Row className="mt-lg-5 pt-3">
//             <Link to="/forgotpassword" className="forgotlink fw-bold">
//               Forgot Your Password?
//             </Link>

//             <Link to="/signup" className="signup fw-bold">
//               Signup
//             </Link>
//           </Row>
//           <button className="rounded-4 p-3 px-5 mt-5">Login</button>
//         </Form>
//       </Row>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login&signup.css";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext "; // Import the useAuth hook

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth(); // Access authentication state and functions

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

 const submitHandler = async (e) => {
   e.preventDefault();

   try {
     const response = await axios.post(
       "https://paradox122.000webhostapp.com/_API/Login.php",
       loginData,
       {
         headers: {
           "Content-Type": "application/x-www-form-urlencoded",
         },
       }
     );

     if (response.data.message === "Login successful") {
       // Login successful, redirect to the home page
       login(); // Call the login function to set isAuthenticated to true
       navigate("/blog"); // Redirect to the /blog page
     } else {
       // Login failed, display an error message
       alert("Login failed. Please check your credentials.");
     }
   } catch (error) {
     console.error("Error:", error);
     // Handle network errors or other exceptions
     alert("Login failed. Please try again later.");
   }
 };

  return (
    <div className="logincls text-center">
      <h3 className="fs-2 elite mt-5">Elite</h3>
      <h4>E n t e r p r i s e s</h4>
      <Row className="mt-5 pt-lg-5">
        <h3 className="loginaccount">Login To Your Account</h3>
        <Form className="loginform" onSubmit={submitHandler}>
          <Row className="justify-content-center mt-3">
            <Form.Group as={Col} md="4">
              <Form.Control
                type="username"
                name="username"
                value={loginData.username}
                onChange={changeHandler}
                required
                placeholder="Username"
                className="inputgrp"
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-center mt-4">
            <Form.Group as={Col} md="4" className="inputgrp">
              <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={changeHandler}
                required
                placeholder="Password"
              />
            </Form.Group>
          </Row>
          {isAuthenticated ? ( // Display the logout button if authenticated
            <Row className="justify-content-center mt-4">
              <button className="rounded-4 p-3 px-5 mt-2" onClick={logout}>
                Logout
              </button>
            </Row>
          ) : null}
          <Row className="mt-lg-5 pt-3">
            <Link to="/forgotpassword" className="forgotlink fw-bold">
              Forgot Your Password?
            </Link>
            <Link to="/signup" className="signup fw-bold">
              Signup
            </Link>
          </Row>
          <button className="rounded-4 p-3 px-5 mt-5">Login</button>
        </Form>
      </Row>
    </div>
  );
};

export default Login;
