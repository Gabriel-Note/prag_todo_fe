"use client";

import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoListEdit from "./TodoListEdit";
import { createTask, getTasksByList } from "../../api/api_calls";

export default function TodoClient({ selectedList }) {
  const [editTodos, setEditTodos] = useState(true);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  async function fetchTodos(listId) {
    if (!listId) return;
    const data = await getTasksByList(listId);
    setTodos(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    if (selectedList?.id) {
      fetchTodos(selectedList.id);
    }
  }, [selectedList]);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!selectedList) return;

    await createTask(task, selectedList.id);
    setTask("");
    fetchTodos(selectedList.id);
  };

  if (!selectedList) {
    return <p>Select a list to get started</p>;
  }

  return (
    <div className="flex-1 bg-white border p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-black">
        {selectedList.name}
      </h2>

      {/* Add task */}
      <form onSubmit={handleCreateTask} className="mb-4">
        <input
          type="text"
          placeholder="New task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </form>

      {/* Toggle edit */}
      <button
        onClick={() => setEditTodos((e) => !e)}
        className="mb-4 bg-black text-white px-4 py-2 rounded"
      >
        {editTodos ? "Edit" : "Stop editing"}
      </button>

      {/* Tasks */}
      <div className="bg-blue-800 p-4 rounded">
        {editTodos ? (
          <TodoList
            todoListData={todos}
            fetchTodos={() => fetchTodos(selectedList.id)}
          />
        ) : (
          <TodoListEdit
            todoListData={todos}
            fetchTodos={() => fetchTodos(selectedList.id)}
          />
        )}
      </div>
    </div>
  );
}