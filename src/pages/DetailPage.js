import { Link, useParams } from "react-router-dom";
import "./Pages.css";

function DetailPage() {
  const { movieId } = useParams();

  return (
    <section className="page-section">
      <div className="container content-card">
        <span className="eyebrow">Movie Detail</span>
        <h1>Chi tiết phim #{movieId}</h1>
        <p>
          Đây là trang tạm để kiểm tra route động <code>/movies/:movieId</code>.
          Thành viên phụ trách DetailPage sẽ thay thế bằng dữ liệu phim thực tế.
        </p>
        <Link className="text-link" to="/">← Quay lại trang chủ</Link>
      </div>
    </section>
  );
}

export default DetailPage;
