import { Link } from "react-router-dom";
import movies from "../data/movies";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="home-page">
      <div className="container">
        <div className="home-heading">
          <span>PHIM ĐỀ XUẤT</span>
          <h1>Danh sách phim</h1>
        </div>

        <div className="movie-grid">
          {movies.map((movie) => (
            <article className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />

              <div className="movie-card-content">
                <h2>{movie.title}</h2>
                <p>
                  {movie.year} · {movie.genre}
                </p>

                <Link to={`/movies/${movie.id}`} className="detail-link">
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
