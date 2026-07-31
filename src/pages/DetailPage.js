import { Link, useParams } from "react-router-dom";
import movies from "../data/movies";
import "./DetailPage.css";

function DetailPage() {
  const { id } = useParams();

  const movie = movies.find((item) => item.id === id);

  if (!movie) {
    return (
      <section className="movie-not-found">
        <h1>Không tìm thấy phim</h1>
        <p>Phim có mã “{id}” không tồn tại.</p>

        <Link to="/" className="back-button">
          Quay về trang chủ
        </Link>
      </section>
    );
  }

  return (
    <section className="movie-detail">
      <div className="container movie-detail-container">
        <div className="movie-poster-wrapper">
          <img
            src={movie.image}
            alt={`Poster phim ${movie.title}`}
            className="movie-poster"
          />
        </div>

        <div className="movie-information">
          <span className="movie-label">CHI TIẾT PHIM</span>

          <h1>{movie.title}</h1>

          <div className="movie-meta">
            <span>{movie.year}</span>
            <span>{movie.genre}</span>
            <span>{movie.duration}</span>
          </div>

          <p className="movie-description">{movie.description}</p>

          <div className="movie-director">
            <strong>Đạo diễn:</strong> {movie.director}
          </div>

          <Link to="/" className="back-button">
            ← Quay về trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
