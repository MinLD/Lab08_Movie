import { Link } from "react-router-dom";
import "./Pages.css";

function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="container content-card">
        <span className="eyebrow">404</span>
        <h1>Không tìm thấy trang</h1>
        <p>Đường dẫn bạn truy cập không tồn tại.</p>
        <Link className="text-link" to="/">← Về trang chủ</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
