import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending:", data);

      const res = await axios.post(
        "http://localhost:3001/ecomusers/login",
        data
      );

      console.log("Response:", res.data);

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");
    } catch (err) {
      console.log("Error:", err.response?.data);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button className="bg-blue-600 text-white w-full p-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Login
        </button>

        {/* Link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 font-medium">
            Register
          </Link>
        </p>
      </form>

    </div>
  );
};

export default Login;