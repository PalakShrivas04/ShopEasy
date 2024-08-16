import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-EazyBuy"}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 bg-white text-white ">
        <div className="md:w-1/2">
          <img
            src="/images/about.jpeg"
            alt="about us"
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/3 bg-gray-800 rounded-lg p-6">
          <p className="text-justify mt-2 ">
            Welcome to our e-commerce platform! We offer a wide range of
            products to cater to all your needs, from electronics to fashion and
            everything in between. Our platform is designed to provide a
            seamless shopping experience, with user-friendly navigation and
            secure payment options. Enjoy exclusive deals, fast delivery, and
            24/7 customer support. We are committed to ensuring your
            satisfaction and making your online shopping experience enjoyable
            and hassle-free.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
