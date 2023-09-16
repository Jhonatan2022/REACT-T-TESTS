import PropTypes from "prop-types";

function ListOfMovies({ movies }) {
  ListOfMovies.propTypes = {
    movies: PropTypes.array,
  };

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No se encontraron películas para esta búsqueda</p>;
}

function Movies({ movies }) {
  Movies.propTypes = {
    movies: PropTypes.array,
  };

  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}

export { Movies };