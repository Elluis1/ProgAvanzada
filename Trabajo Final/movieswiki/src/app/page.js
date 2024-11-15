// src/app/page.js
import HomePage from './components/HomePage';

export default async function Page() {
    const apiKey = 'ba595633075b15efa4b468c42dfab029';
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`);
    const data = await res.json();

    return <HomePage initialMovies={data.results} totalPages={data.total_pages} />;
}
