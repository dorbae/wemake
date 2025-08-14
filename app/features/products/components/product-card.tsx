import { Link } from "react-router";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  commentsCount: number;
  viewsCount: number;
  votesCount: number;
}

export function ProductCard({ id, name, description, commentsCount, viewsCount, votesCount }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      
      {/* 통계 정보 */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span>💬 {commentsCount}</span>
        <span>👁️ {viewsCount}</span>
        <span>👍 {votesCount}</span>
      </div>
      
      <Link 
        to={`/products/${id}`}
        className="text-blue-600 hover:underline text-sm"
      >
        View Details →
      </Link>
    </div>
  );
}
