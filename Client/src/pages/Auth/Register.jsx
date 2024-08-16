import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/user/register", {
        username,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="flex items-center justify-center min-h-[83vh] flex-col bg-gradient-to-r from-pink-200 to-blue-100">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-8 bg-white w-full max-w-md"
        >
          <h4 className="text-center mb-4 font-bold text-2xl font-serif">
            REGISTER FORM
          </h4>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
              placeholder="What is your favourite sports name"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-black text-white py-2 mt-4 hover:bg-gradient-to-r from-gray-700 to-black"
          >
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
