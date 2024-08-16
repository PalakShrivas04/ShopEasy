import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Admin Dashboard"}>
      <div className="container mx-auto p-4 my-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <AdminMenu />
          </div>
          <div className="md:w-3/4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">
                Admin Name: {auth?.user?.name}
              </h3>
              <h3 className="text-lg text-gray-700 mb-1">
                Admin Email: {auth?.user?.email}
              </h3>
              <h3 className="text-lg text-gray-700">
                Admin Contact: {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
