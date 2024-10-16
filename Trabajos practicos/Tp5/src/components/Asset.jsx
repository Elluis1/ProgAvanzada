export function Asset({
    name,
    price
}) {
    return (
        <tr className="border-b">
            <td className="border-l-0 border-b-0 px-4 py-3 text-left text-gray-700 font-medium">{name}</td>
            <td className="border-l-0 border-b-0 text-right text-gray-700 font-medium">{price.toFixed(2)}<span className=""></span></td>
        </tr>
    )
}
