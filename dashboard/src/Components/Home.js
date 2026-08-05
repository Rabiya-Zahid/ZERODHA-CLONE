import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ErrorPage from "./ErrorPage";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Summary from "./Summary";
import App from "./App";
import { GeneralContextProvider } from "./GeneralContext";

const Home = () => {
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        // If no token exists, go to login page
        if (!cookies.token) {
          window.location.href = "https://zerodha-clone-1-vnqf.onrender.com/login";
          return;
        }

        // Verify token with backend
        const { data } = await axios.post(
          "https://zerodha-clone-8882.onrender.com.com/",
          {},
          {
            withCredentials: true,
          }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);

          toast.success(`Welcome ${user}`, {
            position: "top-right",
            autoClose: 2000,
          });
        } else {
          removeCookie("token");
window.location.href = "https://zerodha-clone-1-vnqf.onrender.com/login";
        }
      } catch (error) {
        console.log(error);
        removeCookie("token");
window.location.href = "https://zerodha-clone-1-vnqf.onrender.com/login";
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
   removeCookie("token");
window.location.href = "https://zerodha-clone-1-vnqf.onrender.com/login";
  };

  return (
    <>
      <ToastContainer />

      <TopBar />

      <GeneralContextProvider>
        <div className="dashboard-container border-end">

          <div className="watchlist">
            <WatchList />
          </div>

          <div className="content border-start">

            <div
              className="d-flex justify-content-between align-items-center p-2"
            >
              <h5>Welcome {username}</h5>

              <button
                className="btn btn-danger btn-sm"
                onClick={Logout}
              >
                Logout
              </button>
            </div>

            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<App />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>

          </div>

        </div>
      </GeneralContextProvider>
    </>
  );
};

export default Home;