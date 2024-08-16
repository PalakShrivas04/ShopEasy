import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[65vh]">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-xl font-normal">Oops ! Page Not Found</h2>
        <Link
          to="/"
          className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
