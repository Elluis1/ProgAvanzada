export function ProductCard({
    iconUrl,
    iconAlt,
    title,
    body
}) {
    return (
        <article className="flex flex-col bg-[#282623] rounded-lg shadow-lg p-4 flex items-start">
            <img className="w-5 h-5 mr-2" src={iconUrl} alt={iconAlt} />
            <p className="text-white text-lg font-bold mb-1">{title}</p>
            <p className="text-gray-400 text-sm">{body}</p>
        </article>
    )
}
