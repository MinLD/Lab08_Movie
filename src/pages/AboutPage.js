import "./Pages.css";

function AboutPage() {
  return (
    <section className="page-section">
      <div className="container content-card">
        <span className="eyebrow">About</span>
        <h1>Giới thiệu nhóm</h1>
        <p>
          Đây là trang tạm để kiểm tra route <code>/about</code>. Thành viên phụ
          trách AboutPage sẽ bổ sung thông tin thành viên và thiết kế chính thức.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
