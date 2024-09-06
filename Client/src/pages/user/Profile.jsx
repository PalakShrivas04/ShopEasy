import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import UserMenu from "../../components/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/user/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="container mx-auto p-4 my-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <UserMenu />
          </div>
          <div className="md:w-3/4">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input w-full border-b border-black focus:ring-0 focus:border-black"
                  placeholder="Enter Your Name"
                  
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
                  
                  disabled
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
                  
                />
              </div>

              <button
                type="submit"
                className="btn w-full bg-black text-white py-2 mt-4 hover:bg-gradient-to-r from-gray-700 to-black"
              >
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
