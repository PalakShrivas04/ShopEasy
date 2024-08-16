import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 p-3">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4 p-3">
            <h1 className="text-2xl font-semibold mb-6">Create Product</h1>
            <div className="max-w-lg mx-auto">
              <Select
                variant={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="w-full mb-4"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-4">
                <label className="block w-full border border-gray-300 rounded-lg py-2 px-4 text-center cursor-pointer">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-4">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      className="h-48 object-cover mx-auto"
                    />
                  </div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  placeholder="Write a name"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Write a description"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  value={price}
                  placeholder="Write a price"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Write a quantity"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Select
                  variant={false}
                  placeholder="Select Shipping"
                  size="large"
                  showSearch
                  className="w-full mb-4"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-4">
                <button
                  className="bg-blue-500 text-white w-full py-2 px-4 rounded-lg"
                  onClick={handleCreate}
                >
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
