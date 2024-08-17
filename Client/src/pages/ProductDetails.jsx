import { Layout } from 'antd'
import React, { useState, useEffect } from 'react';
import axios from "axios"

const ProductDetails = () => {
    //get product
    const getProduct = async () => {
        try {
           const {data}=await axios.get(``) 
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
    </Layout>
  )
}

export default ProductDetails
