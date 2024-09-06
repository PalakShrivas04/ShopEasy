import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Dropdown } from "flowbite-react";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from 'antd';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const[cart]=useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="text-gray-300 md:hidden"
            type="button"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() =>
              document
                .getElementById("navbarTogglerDemo01")
                .classList.toggle("hidden")
            }
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Link
            to="/"
            className="text-2xl font-bold text-gray-300 flex items-center ml-4 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
          >
            🛒 Ecommerce App
          </Link>
        </div>
        <div
          className="hidden md:flex items-center space-x-4"
          id="navbarTogglerDemo01"
        >
          <SearchInput />
          <NavLink
            to="/"
            className="text-gray-300 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
          >
            Home
          </NavLink>

          <Dropdown
      label="Categories"
      dismissOnClick={false}
      className="bg-gray-800 text-white"
    >
      <Dropdown.Item>
        <Link
          to={'/categories'}
          className="block px-4 py-2 text-gray-300 hover:text-gray-900"
        >
          All Categories
        </Link>
      </Dropdown.Item>

      {categories?.map((c) => (
        <Dropdown.Item key={c._id}>
          <Link
            to={`/category/${c.slug}`}
            className="block px-4 py-2 text-gray-300 hover:text-gray-900"
          >
            {c.name}
          </Link>
        </Dropdown.Item>
      ))}
    </Dropdown>
          {!auth.user ? (
            <>
              <NavLink
                to="/register"
                className="text-gray-300 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="text-gray-300 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
              >
                Login
              </NavLink>
            </>
          ) : (
            <Dropdown
              label={auth?.user?.role === 1 ? "Admin" : "User"}
              dismissOnClick={false}
              className="bg-gray-800 text-white"
            >
              <Dropdown.Item>
                <NavLink
                  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                  className="px-4 py-2  text-gray-300  hover:text-gray-900"
                >
                  Dashboard
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  onClick={handleLogout}
                  to="/login"
                  className=" px-4 py-2  text-gray-300  hover:text-gray-900"
                >
                  Logout
                </NavLink>
              </Dropdown.Item>
            </Dropdown>
          )}

          
 <Badge size="small" count={cart?.length}  className="relative"
      style={{
        backgroundColor: '#ff4d4f', // Example color, adjust as needed
        color: '#fff',
        fontSize: '0.75rem', // Adjust font size as needed
      }}>
 <NavLink
        to="/cart"
        className="flex items-center text-gray-300 hover:text-yellow-200 hover:border-b hover:border-yellow-200"
        style={{
          fontSize: '1rem', // Adjust font size of the cart text
          display: 'flex',
          alignItems: 'center',
        }}
      >
                <GiShoppingBag className="mr-2 text-xl" /> Cart 
                </NavLink>
    </Badge>
          
        </div>
      </div>
      <div className="md:hidden">
        <ul
          className="flex flex-col space-y-2 mt-2 hidden"
          id="navbarTogglerDemo01"
        >
          <li className="nav-item">
            <NavLink to="/" className="text-gray-300 hover:text-white">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/category" className="text-gray-300 hover:text-white">
              Category
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="text-gray-300 hover:text-white">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="text-gray-300 hover:text-white">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/cart"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <GiShoppingBag className="mr-1" /> Cart (0)
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
