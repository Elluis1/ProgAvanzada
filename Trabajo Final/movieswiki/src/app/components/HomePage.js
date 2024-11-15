// src/app/HomePage.js
"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const apiKey = 'ba595633075b15efa4b468c42dfab029';

const HomePage = ({ initialMovies, totalPages }) => {
    const [movies, setMovies] = useState(initialMovies);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para indicar si se está cargando la búsqueda

    const fetchMovies = async (searchQuery, pageNumber) => {
        setIsLoading(true); // Activar la carga
        const url = searchQuery
            ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${pageNumber}`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`;

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setPage(pageNumber);
        setIsLoading(false); // Desactivar la carga
    };

    const handleSearch = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        fetchMovies(query, 1); // Llamar a la API para buscar películas basadas en la consulta
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSearch} className="mb-6 flex justify-center items-center space-x-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar películas..."
                    className="p-2 w-1/2 sm:w-1/3 md:w-1/4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Buscar
                </button>
            </form>

            {/* Muestra un mensaje de carga mientras se obtienen los datos */}
            {isLoading && <p>Cargando...</p>}

            <div className="movie-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Link href={`/movie/${movie.id}`} key={movie.id}>
                            <div className="movie-card flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/default-image.jpg'}
                                    alt={movie.title}
                                    width={300}
                                    height={450}
                                    className="rounded-md mb-4"
                                />
                                <h3 className="text-center text-lg font-semibold text-gray-800">{movie.title}</h3>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No se encontraron películas.</p> // Mostrar mensaje si no hay resultados
                )}
            </div>

            <div className="pagination flex justify-center items-center space-x-4 mt-8">
                <button
                    disabled={page === 1}
                    onClick={() => fetchMovies(query, page - 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Anterior
                </button>
                <button
                    onClick={() => fetchMovies(query, page + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default HomePage;
