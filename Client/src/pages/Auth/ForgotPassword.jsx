import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/user/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="flex items-center justify-center min-h-[70vh] flex-col bg-gradient-to-t from-[#ffdee9] to-[#b5fffc]">
        <form onSubmit={handleSubmit} className="shadow-lg p-5 bg-white">
          <h4 className="text-center mb-4 font-bold font-serif">
            RESET PASSWORD
          </h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control border-b border-black rounded-none"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control border-b border-black rounded-none"
              id="exampleInputAnswer1"
              placeholder="Enter Your Favorite Sport Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control border-b border-black rounded-none"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-64 border border-black bg-black text-white hover:bg-gradient-to-r from-gray-700 to-black"
          >
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
