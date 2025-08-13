import { NavLink } from "react-router-dom";
const navLinkChangeEffect = (e) => {
  return e.isActive ? "text-green-600 border-b" : ""
}

const Navbar = () => {
  return (
    <>
      <nav  className="flex justify-center gap-20 py-5 text-2xl font-thin">
        <NavLink className={navLinkChangeEffect} to="/">Home</NavLink>
        <NavLink className={navLinkChangeEffect} to="/about">About</NavLink>
        <NavLink className={navLinkChangeEffect} to="/contact">Contact</NavLink>
        <NavLink className={navLinkChangeEffect} to="/form">Sign-up</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
