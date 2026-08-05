import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

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
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
         window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }

    } catch (error) {
      console.log(error);
      handleError("Something went wrong");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <ToastContainer />

      <div className="auth-page">
      <div className="form_container">
        <h1>Signup Account</h1>

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
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleOnChange}
              placeholder="Enter username"
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
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
      </div>

    </>
  );
};

export default Signup;