import React from "react";
import { useLocation } from "react-router-dom";


const ErrorPage = () => {
    const location = useLocation();
    return (
        <div className="container mt-5 text-center">
            <h2>Order Failed</h2>
            <p>{location.state.message}</p>
        </div>
    );
};

export default ErrorPage;