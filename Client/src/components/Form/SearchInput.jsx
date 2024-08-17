import React from "react";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.get(`/api/v1/product/search/${values.keyword}`);
        setValues({ ...values, results: data });
        navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="flex" role="search" onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="ml-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded px-4 py-2 transition-colors duration-300"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchInput;
