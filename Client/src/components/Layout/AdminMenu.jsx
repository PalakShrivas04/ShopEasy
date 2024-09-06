import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h4 className="text-xl font-bold mb-4">Admin Panel</h4>
        <NavLink
          to="/dashboard/admin/create-category"
          className="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
          activeClassName="bg-gray-200 font-semibold"
        >
          Create Category
        </NavLink>

        <NavLink
          to="/dashboard/admin/create-product"
          className="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
          activeClassName="bg-gray-200 font-semibold"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
          activeClassName="bg-gray-200 font-semibold"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
          activeClassName="bg-gray-200 font-semibold"
        >
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
          activeClassName="bg-gray-200 font-semibold"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
