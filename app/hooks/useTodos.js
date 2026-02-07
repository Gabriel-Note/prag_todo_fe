//"use server"

import { useState, useEffect } from "react";

export function useTodos(initialData) {
  const [todos, setTodos] = useState(initialData);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:8080/tasks");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }

    if (refresh) {
      fetchTodos();
      setRefresh(false);
    }
  }, [refresh]);

  // Return the todos and a function to trigger refresh
  return { 
    todos, 
    refreshTodos: () => {
      setRefresh(true)
    } 
  };
}