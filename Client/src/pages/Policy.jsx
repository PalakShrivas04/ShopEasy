import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 bg-gray-100 text-white ">
        <div className="md:w-1/2">
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2 bg-gray-800 rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-2">
            Welcome to our e-commerce platform. We value your privacy and are
            committed to protecting your personal information.
          </p>

          <h2 className="text-xl font-semibold mb-2">Information Collection</h2>
          <p className="mb-2">
            We collect information you provide when you create an account, place
            an order, or contact customer service. This includes your name,
            email address, shipping address, and payment information.
          </p>

          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="mb-2">
            We implement a variety of security measures to maintain the safety
            of your personal information.
          </p>

          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p className="mb-2">
            We use cookies to enhance your shopping experience. Cookies help us
            understand your preferences and provide personalized features. Y
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
