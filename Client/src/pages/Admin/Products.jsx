import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");

      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 p-4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4 p-4">
          <h1 className="text-center text-2xl font-bold mb-4">
            All Products List
          </h1>
          <div className="flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="w-full sm:w-1/2 lg:w-1/3 p-2"
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="w-full h-48 object-cover"
                    alt={p.name}
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-bold">{p.name}</h5>
                    <p className="text-sm text-gray-600">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
