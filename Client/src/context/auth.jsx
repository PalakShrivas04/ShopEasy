import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

//create context
const AuthContext = createContext();

//we have created a global state and now we can use it any where
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  // Set axios default authorization header when auth.token changes
  useEffect(() => {
    const data = localStorage.getItem("auth");

    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
