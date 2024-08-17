import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <h6>
          {values?.results.length < 1
            ? "No Products Found"
            : `Found ${values?.results.length}`}
        </h6>
        <div className="flex flex-wrap justify-center mt-4">
            {values?.results.map((p) => (
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
    </Layout>
  );
};

export default Search;
