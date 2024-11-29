export default function Card({ title, description }) {
    return (
        <div className="bg-gray-800 text-white p-4 rounded shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    );
}