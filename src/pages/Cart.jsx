import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} from "../redux/slices/cartSlice";
import axios from "axios";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // ✅ TOTAL CALCULATION
  const total = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ✅ PLACE ORDER FUNCTION
  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const orderData = {
        items: items.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          qty: item.qty
        })),
        totalAmount: total
      };

      const res = await axios.post(
        "http://localhost:3001/orders/create",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(res.data);

      alert("Order placed successfully ✅");

      // ✅ CLEAR CART AFTER ORDER
      dispatch(clearCart());

    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <div className="max-w-3xl mx-auto">

          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 mb-4 rounded shadow flex justify-between items-center"
            >
              {/* PRODUCT INFO */}
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>₹{item.price}</p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-2">

                <button
                  onClick={() => dispatch(decreaseQty(item._id))}
                  className="bg-gray-300 px-2"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => dispatch(increaseQty(item._id))}
                  className="bg-gray-300 px-2"
                >
                  +
                </button>

              </div>

              {/* REMOVE */}
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL + ORDER BUTTON */}
          <div className="text-right mt-6">

            <h2 className="text-xl font-bold mb-3">
              Total: ₹{total}
            </h2>

            <button
              onClick={placeOrder}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Place Order
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;