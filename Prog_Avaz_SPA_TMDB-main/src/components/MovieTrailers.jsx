import React from 'react';

const MovieTrailers = ({ trailers }) => {
    {/* Verificar si trailers están disponibles */}
    if (!trailers || trailers.length === 0) {
        return <p>No hay trailers disponibles.</p>;
    }

    return (
        // Contenedor de trailers
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Trailers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Elementos de trailers */}
                {trailers.map((trailer) => (
                    <iframe
                        key={trailer.id}
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ))}
            </div>
        </div>
    );
};

export default MovieTrailers;
