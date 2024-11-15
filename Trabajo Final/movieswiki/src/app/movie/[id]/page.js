import Image from 'next/image';

const apiKey = 'ba595633075b15efa4b468c42dfab029';

async function fetchMovieDetails(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`);
    const data = await res.json();
    return data;
}

export default async function MovieDetails({ params }) {
    const { id } = await params;
    const movie = await fetchMovieDetails(id);

    return (
        <div className="container mx-auto p-6 bg-gray-400">
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
                <div className="mb-6 sm:mb-0">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={300}
                        height={450}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{movie.title}</h1>
                    <p className="text-black text-lg mb-4">{movie.overview}</p>
                    <p className="text-black font-semibold mb-2">Fecha de lanzamiento: <span className="font-normal">{movie.release_date}</span></p>
                    <p className="text-black font-semibold mb-4">Calificación: <span className="font-normal">{movie.vote_average}</span></p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trailers</h2>

                    <div className="space-y-6">
                        {movie.videos.results.map((trailer) => (
                            <div key={trailer.id} className="flex flex-col items-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{trailer.name}</h3>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
