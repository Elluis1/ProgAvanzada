import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    {/* Componente de búsqueda */}
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            setQuery('');
        }
    };
    {/* Formulario de búsqueda */}
    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar películas..."
                className="border border-gray-300 rounded-l-md p-2 w-64"
            />
            <button
                type="submit"
                className="bg-[#01b4e4] text-white rounded-r-md p-2 hover:bg-[#00a3d1]"
            >
                Buscar
            </button>
        </form>
    );
};

export default SearchBar;