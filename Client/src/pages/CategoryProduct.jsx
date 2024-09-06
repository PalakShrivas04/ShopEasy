import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
    const navigate = useNavigate();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);
    
  const getProductByCat = async () => {
    try {
      
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title="Porduct Category">
      <div className="container mt-3">
              <h4 className="text-center">Category - {category?.name}</h4>
              <h6 className="text-center">{products?.length} result found</h6>
              <div className="row">
              <div className="flex flex-wrap justify-center">
            {products?.map((p) => (
              <div
                key={p._id}
                className="card m-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="w-full h-48 object-cover"
                  alt={p.name}
                />
                <div className="p-4">
                  <h5 className="font-bold text-lg mb-2">{p.name}</h5>
                  <p className="text-gray-700 mb-2">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="text-gray-900 font-bold mb-4">$ {p.price}</p>
                  <button
                    onClick={() => navigate(`/product/${p.slug}`)}
                    style={{
                      backgroundColor: "#007bff", // Bootstrap Primary Blue
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      textAlign: "center",
                      width: "46%", // Adjust the width to fit side by side with a small gap
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Add a subtle shadow for depth
                      marginRight: "4%", // Small margin between the buttons
                      display: "inline-block", // Ensure buttons are inline
                    }}
                  >
                    More Details
                  </button>
                  <button
                    style={{
                      backgroundColor: "#6c757d", // Bootstrap Secondary Gray
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      textAlign: "center",
                      width: "46%", // Adjust the width to fit side by side with a small gap
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Add a subtle shadow for depth
                      display: "inline-block", // Ensure buttons are inline
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
              </div>
      </div>
      
    </Layout>
  );
};

export default CategoryProduct;
