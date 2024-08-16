import React from "react";
import Layout from "./../../components/Layout/Layout";
import UserMenu from "../../components/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container mx-auto p-4 my-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <UserMenu />
          </div>
          <div className="md:w-3/4">
            <h1 className="text-2xl font-bold">All Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
