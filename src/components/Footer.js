import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>MovieLab</h3>
          <p>Website giới thiệu phim sử dụng React và Git.</p>
        </div>

        <p>© {new Date().getFullYear()} Nhóm Lab 8</p>
      </div>
    </footer>
  );
}

export default Footer;
