import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:3001/products/getproduct",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // ✅ IMPORTANT (your backend structure)
      setProducts(res.data.result);

    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🛍️ Explore Products
      </h1>

      {/* EMPTY STATE */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No products available
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

        </div>
      )}

    </div>
  );
};

export default Home;