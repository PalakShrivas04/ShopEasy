import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-xl font-bold mb-4">Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="block px-4 py-2 mb-2 text-gray-700 hover:bg-gray-200 rounded"
            activeClassName="bg-gray-200 font-semibold"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
            activeClassName="bg-gray-200 font-semibold"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
