import React, { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-3">
          {categories.map((c) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-5" key={c._id}>
              <Link
                to={`/categories/${c.slug}`}
                className="block bg-blue-500 text-white text-center py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
