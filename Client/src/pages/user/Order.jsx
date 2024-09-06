import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import UserMenu from "../../components/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container mx-auto p-4 my-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0">
            <UserMenu />
          </div>
          <div className="md:w-3/4">
            <h1 className="text-2xl font-bold">All Orders</h1>
            {orders?.map((o, i) => (
              <div className="border shadow p-4 mb-4" key={o._id}>
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">#</th>
                      <th className="border px-4 py-2">Status</th>
                      <th className="border px-4 py-2">Buyer</th>
                      <th className="border px-4 py-2">Orders</th>
                      <th className="border px-4 py-2">Payment</th>
                      <th className="border px-4 py-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">{i + 1}</td>
                      <td className="border px-4 py-2">{o?.status}</td>
                      <td className="border px-4 py-2">{o?.buyer?.name}</td>
                      <td className="border px-4 py-2">
                        {moment(o?.createAt).fromNow()}
                      </td>
                      <td className="border px-4 py-2">
                        {o?.payment?.success ? "Success" : "Failed"}
                      </td>
                      <td className="border px-4 py-2">
                        {o?.products?.length}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  {o?.products?.map((item, i) => (
                    <div key={item._id}>
                      <h3>{item.name}</h3>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
