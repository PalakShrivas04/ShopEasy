import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Dispatched",
    "Out for Delivery",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/user/all-orders");
      setOrders(data);
    } catch (error) {
      // console.log(error);
      console.log(
        "Error fetching orders:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/user/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Orders Data"}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center"> All Orders</h1>
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
                    <td className="border px-4 py-2">
                      <Select
                        bordered={false}
                        onChange={(value) => handleChange(o._id, value)}
                        defaultValue={o?.status}
                      >
                        {status.map((s, i) => (
                          <Option key={i} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td className="border px-4 py-2">{o?.buyer?.name}</td>
                    <td className="border px-4 py-2">
                      {moment(o?.createAt).fromNow()}
                    </td>
                    <td className="border px-4 py-2">
                      {o?.payment?.success ? "Success" : "Failed"}
                    </td>
                    <td className="border px-4 py-2">{o?.products?.length}</td>
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
    </Layout>
  );
};

export default AdminOrders;
