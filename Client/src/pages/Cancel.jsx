import React from "react";
import { Link } from "react-router-dom"; // assuming you're using react-router for navigation

const Cancel = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Payment Canceled</h1>
      <p>
        Your payment was not successful. Please try again or contact support.
      </p>
      <Link to="/checkout">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Try Again
        </button>
      </Link>
    </div>
  );
};

export default Cancel;
