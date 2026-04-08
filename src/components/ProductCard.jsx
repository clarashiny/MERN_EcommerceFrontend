import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">

      {/* IMAGE (dummy for now) */}
      <img
        src="https://via.placeholder.com/200"
        alt="product"
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* PRODUCT DETAILS */}
      <h2 className="text-lg font-semibold mt-3">
        {product.productName}
      </h2>

      <p className="text-gray-500 text-sm">
        Category: {product.category}
      </p>

      <p className="text-blue-600 font-bold mt-1">
        ₹{product.price}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;