import { Link } from "react-router-dom";
import "./Pages.css";

function HomePage() {
  return (
    <section className="page-section hero-section">
      <div className="container">
        <span className="eyebrow">React Movie Website</span>
        <h1>Khám phá những bộ phim đáng xem</h1>
        <p className="page-lead">
          Đây là nội dung tạm để kiểm tra Header, Footer, layout và React Router.
          Thành viên phụ trách HomePage sẽ thay thế phần này bằng danh sách phim.
        </p>
        <div className="page-actions">
          <Link className="button button--primary" to="/movies/1">
            Xem trang chi tiết mẫu
          </Link>
          <Link className="button button--secondary" to="/about">
            Giới thiệu nhóm
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
