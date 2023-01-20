import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = function () {
  return (
    <header>
      <Link to="/" className='noneLink'>
      <h1>
        RyM ProductsVariety <FaReact />
      </h1>
      </Link>
    </header>
  );
};

export default Header;
