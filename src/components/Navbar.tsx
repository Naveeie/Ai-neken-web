import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ol>
      <li><Link to="/contact">Contact us</Link></li>
      <li><Link to="/about">About us</Link></li>
      </ol>
    </div>
  );
};

export default Navbar;
