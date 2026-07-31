import "./Pages.css";
import "./AboutPage.css";

const team = [
  { name: "Do Dang Minh Luan", role: "Truong nhom", branch: "feature/header-footer" },
  { name: "Nguyen Huu Tan", role: "Thanh vien", branch: "feature/home-page" },
  { name: "Huynh Tan Len", role: "Thanh vien", branch: "feature/about-page" },
  { name: "Nguyen Dinh Bao Tram", role: "Thanh vien", branch: "feature/movie-detail" },
];

const techStack = ["React", "React Router", "Git Flow", "GitHub Pull Request"];

function initials(fullName) {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function AboutPage() {
  return (
    <>
      <section className="page-section">
        <div className="container content-card">
          <span className="eyebrow">About</span>
          <h1>Giới thiệu nhóm</h1>
          <p>
            MovieLab là dự án thực hành xây dựng website giới thiệu phim bằng
            React, được nhóm phát triển theo quy trình Git Flow: nhánh{" "}
            <code>main</code> giữ bản hoàn thiện, nhánh <code>develop</code>{" "}
            tích hợp tính năng, và mỗi thành viên làm việc trên một nhánh{" "}
            <code>feature/*</code> riêng trước khi gửi Pull Request.
          </p>

          <div className="tech-badges">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section team-section">
        <div className="container">
          <span className="eyebrow">Team</span>
          <h2 className="team-heading">Thành viên nhóm</h2>

          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.branch}>
                <div className="team-card__avatar" aria-hidden="true">
                  {initials(member.name)}
                </div>
                <div className="team-card__info">
                  <p className="team-card__name">{member.name}</p>
                  <p className="team-card__role">{member.role}</p>
                  <code className="team-card__branch">{member.branch}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
