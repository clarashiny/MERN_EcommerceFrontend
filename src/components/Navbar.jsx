import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">E-CART</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>
            <Link to="/orders">Orders</Link>
            
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;