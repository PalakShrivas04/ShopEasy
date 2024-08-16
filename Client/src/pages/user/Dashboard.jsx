import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/UserMenu";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container mx-auto my-6 p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <UserMenu />
          </div>
          <div className="md:w-3/4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{auth?.user?.name}</h3>
              <h3 className="text-lg text-gray-700 mb-1">
                {auth?.user?.email}
              </h3>
              <h3 className="text-lg text-gray-700">{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
