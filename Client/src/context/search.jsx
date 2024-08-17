import { useState, useEffect, useContext, createContext } from "react";


//create context
const SearchContext = createContext();

//we have created a global state and now we can use it any where
const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
      keyword: "",
      results:[]
  });
  
  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
