import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    ContactNo: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending:", data);

      const res = await axios.post(
        "http://localhost:3001/ecomusers/register",
        data
      );

      console.log(res.data);
      alert("Registered Successfully ✅");
    } catch (err) {
      console.log("Error:", err.response?.data);
      alert("Register Failed ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create Account
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="border p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="border p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Address */}
        <input
          type="text"
          placeholder="Address"
          required
          onChange={(e) => setData({ ...data, address: e.target.value })}
          className="border p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Contact */}
        <input
          type="number"
          placeholder="Contact Number"
          required
          onChange={(e) => setData({ ...data, ContactNo: e.target.value })}
          className="border p-3 w-full mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          Register
        </button>

        {/* Link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 font-medium">
            Login
          </a>
        </p>
      </form>

    </div>
  );
};

export default Register;