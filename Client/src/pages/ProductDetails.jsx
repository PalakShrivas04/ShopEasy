import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  //inital p details 
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container mx-auto mt-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="w-full max-w-[400px] h-auto object-cover"
              alt={product.name}
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left md:ml-8">
            <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            <h4 className="text-lg font-medium mb-2">Name: {product.name}</h4>
            <h4 className="text-lg font-medium mb-2">
              Description: {product.description}
            </h4>
            <h4 className="text-lg font-medium mb-2">Price: {product.price}</h4>
            <h4 className="text-lg font-medium mb-2">
              Category: {product?.category?.name}
            </h4>
            <button
              style={{
                backgroundColor: "#6c757d",
                color: "white",
                padding: "8px 16px",
                borderRadius: "4px",
                textAlign: "center",
                width: "46%",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                display: "inline-block",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
<hr/>
        <div className="mt-6">
          <h1 className="text-xl font-bold">Similar Products</h1>
          {relatedProduct.length<1 && (<p className="text-lg font-medium text-center text-gray-600 bg-gray-100 p-4 rounded-md shadow-md">No similar products found</p>)}
          <div className="flex flex-wrap justify-center">
            {relatedProduct?.map((p) => (
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

export default ProductDetails;
