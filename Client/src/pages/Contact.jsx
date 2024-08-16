import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
        <div className="md:w-1/2">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            className="w-full"
          />
        </div>
        <div className="md:w-1/3 bg-gray-800 p-4 text-white text-center rounded-lg">
          <h1 className="bg-gray-900 p-2 rounded-lg">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about products, feel free to call anytime. We are
            available 24x7.
          </p>
          <p className="mt-3 flex items-center justify-center">
            <BiMailSend className="mr-2" /> pratham.guptapg22@gmail.com
          </p>
          <p className="mt-3 flex items-center justify-center">
            <BiPhoneCall className="mr-2" /> +91-7974732198
          </p>
          <p className="mt-3 flex items-center justify-center">
            <BiSupport className="mr-2" /> 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
