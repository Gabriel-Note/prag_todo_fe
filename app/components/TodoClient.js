"use client";

import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { createTask } from "../api/api_calls"

export default function TodoClient() {
  const [showTodos, setShowTodos] = useState(true);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  /* const { todos, refreshTodos } = useTodos(todoClientData); */
  /* const {refreshLocal, setRefreshLocal } = useState(false); */

  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:8080/tasks");
      const data = await response.json();
      setTodos(data);

    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    await createTask(task);
    fetchTodos();
    setTask("");
  }

  return (
    <section className="mx-auto w-full max-w-lg rounded-xl bg-white border-4 p-6 shadow">
      <h1 className="mb-4 text-2xl text-center text-zinc-800 font-bold">📝 My Todos</h1>

      {/* Create Form */}
      <form onSubmit={handleCreateTask} className="mb-4 space-y-2 text-black">
        <input
          type="text"
          placeholder="Enter task here"
          value={task}
          onChange={(e) => setTask(e.target.value)}

          required
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-green-900 px-4 py-2 text-white"
        >
          Add Task
        </button>
      </form>

      <button
        onClick={() => setShowTodos(s => !s)}
        className="mb-4 w-full rounded-md bg-black px-4 py-2 text-white"
      >
        {showTodos ? "Hide todos" : "Show todos"}
      </button>

      {showTodos && (
        <div className="bg-rose-800 border-2 border-green-900 rounded-md p-4">
          <TodoList
            todoListData={todos}
            fetchTodos={fetchTodos}
          />
        </div>
      )}
    </section>
  );
}




