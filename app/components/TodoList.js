import { useState } from "react";
import { editTask } from "../api/api_calls"


export default function TodoList({ todoListData, fetchTodos }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  // const { todos, refreshTodos } = useTodos(todoListData);


  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.task);
  };

  const handleSaveEdit = async (todo) => {
    const newTask = { ...todo, task: editText }
    await editTask(newTask)
    setEditingId(null);
    setEditText("");
    fetchTodos();
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="space-y-2">
      {todoListData && todoListData.map((todo) => (
        <div
          key={todo.id}
          className="relative p-2 border rounded-lg gap-x-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          onMouseEnter={() => setHoveredId(todo.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Task text or edit input */}
          <div className="pr-20">
            {editingId === todo.id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSaveEdit(todo);
                    }
                    if (e.key === 'Escape') {
                      handleCancelEdit();
                    }
                  }}
                  className="w-full px-2 py-1 border rounded text-gray-800"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSaveEdit(todo)}
                    className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p
                className="text-gray-800 break-words cursor-pointer hover:text-blue-600"
                onClick={() => handleEditClick(todo)}
              >
                {todo.task}
              </p>
            )}
          </div>

          {/* Delete button - show on hover (only when not editing) */}
          {hoveredId === todo.id && editingId !== todo.id && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
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