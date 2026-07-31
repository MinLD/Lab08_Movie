import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          MovieLab
        </NavLink>

        <nav className="navigation">
          <NavLink to="/" className="nav-link">
            Trang chủ
          </NavLink>

          <NavLink to="/about" className="nav-link">
            Giới thiệu
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
