import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3001/orders/get"
      );

      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center">No Orders Yet</p>
      ) : (
        orders.map(order => (
          <div key={order._id} className="bg-white p-4 mb-4 shadow">
            <p>Total: ₹{order.totalAmount}</p>

            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} - {item.qty}
              </p>
            ))}
          </div>
        ))
      )}

    </div>
  );
};

export default Orders;