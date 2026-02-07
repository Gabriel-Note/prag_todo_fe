//"use server"

import { useState, useEffect } from "react";

export function useTodos(initialData) {
  const [todos, setTodos] = useState(initialData);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      try {
        console.log("Fetching todos from server...")
        const response = await fetch("http://localhost:8080/tasks");
        const data = await response.json();
        console.log("fetched todos:", data)
        setTodos(data);
        console.log("Todos state updated")
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    }

    if (refresh) {
      console.log("Refresh is true, fetching...")
      fetchTodos();
      setRefresh(false);
    }
  }, [refresh]);

  // Return the todos and a function to trigger refresh
  return { 
    todos, 
    refreshTodos: () => {
      console.log("refreshTodos called")
      setRefresh(true)
    } 
  };
}