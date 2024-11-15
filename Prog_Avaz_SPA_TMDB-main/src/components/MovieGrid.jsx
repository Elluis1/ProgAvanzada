import { Link } from 'react-router-dom';

const MovieGrid = ({ movies, onSelectMovie }) => {
    if (!movies || movies.length === 0) return <p>No hay películas disponibles.</p>;

    return (
        // Contenedor de la grilla de películas
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {/* Elementos de la grilla de películas */}
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item">
                    <Link to={`/movies/${movie.id}`} onClick={() => onSelectMovie(movie.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieGrid;
