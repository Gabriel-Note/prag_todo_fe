"use client";

import { useState } from "react";
import TodoList from "./TodoList";
import Image from "next/image";
import createTask from "../api/api_calls"
import { useTodos } from "../hooks/useTodos.js";

console.log("useTodos imported:", useTodos);
console.log("useTodos type:", typeof useTodos);

export default function TodoClient({todoClientData}) {
    const [showTodos, setShowTodos] = useState(true);
    //const [todos, setTodos] = useState(todoClientData);
    const [task, setTask] = useState("");
    //const { todos, refreshTodos } = useTodos(todoClientData);
    const result = useTodos(todoClientData);
    console.log("useTodos result:", result); // Debug: see what's returned
    const { todos, refreshTodos } = result;

    console.log("refreshTodos type:", typeof refreshTodos); // Should be "function"


    const handleCreateTask = async (e) => {
    e.preventDefault();
    await createTask(task);
    alert("Task created successfully!");
    setTask("");
    console.log("About to call refresh");
    refreshTodos()
    console.log("refresh called");

    }

  return (
    <section className="w-full max-w-md rounded-xl bg-white p-6 shadow">
      <h1 className="mb-4 text-2xl font-semibold">📝 My Todos</h1>

      {/* Create Form */}
      <form onSubmit={handleCreateTask} className="mb-4 space-y-2">
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
          className="w-full rounded-md bg-green-500 px-4 py-2 text-white"
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
        <>
          <TodoList todoListData={todos} />
        </>
      )}
    </section>
  );
}




