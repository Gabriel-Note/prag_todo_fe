import Image from "next/image";
import { useState } from "react";

export default function TodoList({ todoListData }) {
  const [hoveredId, setHoveredId] = useState(null);


  return (
    <div className="space-y-2">
      {todoListData && todoListData.map((todo) => (
        <div
          key={todo.id}
          className="relative p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          onMouseEnter={() => setHoveredId(todo.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Task text */}
          <div className="pr-20">
            <p className="text-gray-800">{todo.task}</p>
          </div>

          {/* Buttons - show on hover */}
          {hoveredId === todo.id && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                onClick={() => onEdit(todo)}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
