import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import Pagination from './components/Pagination';
import GetMovies from './components/GetMovies';
import MovieDetails from './components/MovieDetails';
import MovieTrailers from './components/MovieTrailers';

function App() {
    {/* Estados para manejar la paginación */}
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [query, setQuery] = useState('');
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
    const [selectedMovieTrailers, setSelectedMovieTrailers] = useState([]);

    {/* Funciones para manejar la paginación */}
    const handleMoviesFetched = (fetchedMovies, total) => {
        setMovies(fetchedMovies);
        setTotalPages(total);
    };
    const handleMovieDetailsFetched = (movie) => {
        setSelectedMovieDetails(movie);
    };

    const handleMovieTrailersFetched = (trailers) => {
        setSelectedMovieTrailers(trailers);
    };

    // Detectar la ubicación actual para controlar la visibilidad de la paginación
    const location = useLocation();
    const isDetailsPage = location.pathname.startsWith('/movies/');

    return (
        <div className="App">
            <Header />
            {!isDetailsPage && (
                <SearchBar onSearch={setQuery} 
                />
            )}
            <GetMovies 
                query={query} 
                page={currentPage} 
                onMoviesFetched={handleMoviesFetched} 
                movieId={selectedMovieId} 
                onMovieDetailsFetched={handleMovieDetailsFetched} 
                onMovieTrailersFetched={handleMovieTrailersFetched}
            />
            <Routes>
                <Route path="/" element={<MovieGrid movies={movies} onSelectMovie={setSelectedMovieId} />} />
                <Route path="/movies/:id" element={<MovieDetails movie={selectedMovieDetails} />} />
                <Route path="/movies/:id/trailers" element={<MovieTrailers trailers={selectedMovieTrailers} />} />
            </Routes>
            {!isDetailsPage && (
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={setCurrentPage} 
                />
            )}
        </div>
    );
}
{/* Componente principal de la aplicación */}
function WrappedApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default WrappedApp;
