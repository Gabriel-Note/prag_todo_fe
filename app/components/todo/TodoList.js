import { changeCompleted } from "../api/api_calls"

export default function TodoList({ todoListData, fetchTodos }) {

  const handleChangeCompleted = async (todo) => {
    await changeCompleted(todo);
    fetchTodos();
  };

  return (
    <div className="space-y-2 cursor-pointer">
      {todoListData && todoListData.map((todo) => (
        <div
          key={todo.id}
          className="flex relative p-2 border rounded-lg gap-x-4 bg-gray-50 hover:bg-gray-300 transition-colors"
          onClick={() => handleChangeCompleted(todo)}
        >
          <div className="absolute left-2 top-1/2 -translate-y-1/2"
          >
            {todo.completed ? "✅" : "⬜"}
          </div>
          <div className={`pl-8 break-words w-full ${todo.completed
            ? "line-through text-gray-400"
            : "text-gray-800"
            }`}
          >
            {todo.description}
          </div>
        </div>
      ))}
    </div>
  );
}