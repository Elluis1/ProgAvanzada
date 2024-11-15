import React from 'react';
import { Link } from 'react-router-dom';
const MovieDetails = ({ movie, hideNavigationButtons }) => {
    console.log("Datos de la película recibidos:", movie);

    if (!movie) {
        return <p>Cargando detalles de la película...</p>;
    }

    return (
        <div className="p-4 flex gap-8">
            {/* Contenedor del póster */}
            <div className="w-1/3">
                {movie.poster_path ? (
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        className="w-full rounded-lg" 
                    />
                ) : (
                    <p>No hay imagen disponible</p>
                )}
            </div>

            {/* Contenedor de detalles de la película */}
            <div className="w-2/3">
                <h2 className="text-3xl font-semibold mb-4">{movie.title}</h2>
                <p className="mb-4">{movie.overview}</p>
                <p className="mb-2"><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
                <p className="mb-4"><strong>Puntuación:</strong> {movie.vote_average}</p>

                {/* Enlace a la sección de trailers */}
                <Link to={`/movies/${movie.id}/trailers`} className="text-blue-500 underline">
                    Ver Trailers
                </Link>
            </div>
        </div>
    );
};

export default MovieDetails;
