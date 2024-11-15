import React, { useState, useEffect, useParams } from 'react';

const GetMovies = ({ query, page, onMoviesFetched, movieId, onMovieDetailsFetched, onMovieTrailersFetched }) => {
    const apiKey = 'ba595633075b15efa4b468c42dfab029';

    useEffect(() => {
        const fetchMovies = async () => {
            let url = query
                ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                onMoviesFetched(data.results, data.total_pages);
            } catch (error) {
                console.error("Error fetching movies:", error);
                onMoviesFetched([], 0);
            }
        };

        fetchMovies();
    }, [query, page, onMoviesFetched]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (movieId) {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);
                    const data = await response.json();
    
                    console.log("Detalles de la película:", data); // Verificar los datos
    
                    // Enviar detalles de la película y trailers
                    onMovieDetailsFetched(data);
                    onMovieTrailersFetched(data.videos.results);
                } catch (error) {
                    console.error("Error al obtener los detalles de la película:", error);
                }
            }
        };
    
        fetchMovieDetails();
    }, [movieId, onMovieDetailsFetched, onMovieTrailersFetched]);
    

    return null;
};

export default GetMovies;