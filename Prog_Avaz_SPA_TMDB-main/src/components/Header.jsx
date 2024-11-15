import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    {/* Encabezado de la aplicación */}
    return (
        <header className="bg-gradient-to-r from-[#0e2033] via-[#012f3b] to-[#106126] p-4 flex justify-center items-center">
            <Link to="/">
                <img 
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                    alt="TMDB Logo" 
                    className="h-12 md:h-16"
                />
            </Link>
        </header>
    );
};

export default Header;