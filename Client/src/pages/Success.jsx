import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Payment Successful!</h1>
      <p>
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link to="/">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Success;
