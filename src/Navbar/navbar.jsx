import { NavLink } from "react-router-dom";
const navLinkChangeEffect = (e) => {
  return e.isActive ? "text-green-600 border-b" : ""
}

const Navbar = () => {
  return (
    <>
      <nav  className="flex justify-center items-center gap-20 py-5 text-2xl font-thin">
        <NavLink className={navLinkChangeEffect} to="/">Home</NavLink>
        <NavLink className={navLinkChangeEffect} to="/about">About</NavLink>
        <NavLink className={navLinkChangeEffect} to="/contact">Contact</NavLink>
        <NavLink className={(e) => `p-2 rounded text-xl font-bold ${e.isActive ? "bg-green-800" : "bg-gray-700" }`}to="/form">Add Product</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
