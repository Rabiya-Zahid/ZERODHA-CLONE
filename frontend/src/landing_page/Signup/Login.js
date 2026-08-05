import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const Login = () => {

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };


  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };


  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "https://zerodha-clone-8882.onrender.com/login",
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        }
      );


      console.log(data);


      const { success, message } = data;


      if (success) {

        handleSuccess(message);

        setTimeout(() => {
          window.location.href =
"https://zerodha-clone-dashboard-f0tk.onrender.com";
        }, 1000);

      } 
      else {

        handleError(message);

      }


    } catch (error) {

      console.log(error);
      handleError("Login failed");

    }


    setInputValue({
      email: "",
      password: "",
    });

  };


  return (
    <>

      <ToastContainer />


      <div className="auth-page">
      <div className="form_container">

        <h1>Login Account</h1>


        <form onSubmit={handleSubmit}>


          <div>

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email"
            />

          </div>



          <div>

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
            />

          </div>



          <button type="submit">
            Submit
          </button>


        </form>



        <p>
          Don't have an account?

          <Link to="/signup">
            Signup
          </Link>

        </p>


      </div>
      </div>
    </>
  );
};


export default Login;