import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div>
          <strong>MovieLab</strong>
          <p>Website giới thiệu phim sử dụng React và Git.</p>
        </div>

        <p className="site-footer__copyright">
          © {currentYear} Nhóm Lab 8. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
