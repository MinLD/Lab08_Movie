import { NavLink } from "react-router-dom";
import "./Header.css";

const navItems = [
  { to: "/", label: "Trang chủ", end: true },
  { to: "/about", label: "Giới thiệu", end: false }
];

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <NavLink className="brand" to="/" aria-label="Về trang chủ MovieLab">
          <span className="brand__mark" aria-hidden="true">M</span>
          <span className="brand__text">MovieLab</span>
        </NavLink>

        <nav className="main-nav" aria-label="Điều hướng chính">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `main-nav__link${isActive ? " main-nav__link--active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
