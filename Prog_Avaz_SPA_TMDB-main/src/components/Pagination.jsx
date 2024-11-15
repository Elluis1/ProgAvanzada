const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    {/* Componente de paginación */}
    return (
        // Contenedor de la paginación
        <div className="flex items-center justify-center p-4">
            {/* Botones de navegación */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-2 px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#01b4e4] text-white hover:bg-[#00a3d1]'}`}
            >
                Anterior
            </button>
            <span className="mx-2">
                Página {currentPage} de {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`mx-2 px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#01b4e4] text-white hover:bg-[#00a3d1]'}`}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;