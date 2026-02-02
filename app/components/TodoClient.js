"use client";

import { useState } from "react";
import TodoList from "./TodoList";
import Image from "next/image";

export default function TodoClient({todoClientData}) {
    const [showTodos, setShowTodos] = useState(false);

  return (
    <section className="w-full max-w-md rounded-xl bg-white p-6 shadow">
      <h1 className="mb-4 text-2xl font-semibold">📝 My Todos</h1>

      <button
        onClick={() => setShowTodos(s => !s)}
        className="mb-4 w-full rounded-md bg-black px-4 py-2 text-white"
      >
        {showTodos ? "Hide todos" : "Show todos"}
      </button>

      {showTodos && (
        <>
          <TodoList todoListData={todoClientData} />
        </>
      )}
    </section>
  );
}




