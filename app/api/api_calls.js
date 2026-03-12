"use server"

export async function createTask(task, listId) {
  try {
    const response = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: task,
        points: 0,
        ...(listId && { taskListId: listId })
      }),
    });
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to create task: ${response.status} ${response.statusText} — ${errorBody}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function editTask(todo) {
  try {
    const response = await fetch(`http://localhost:8080/tasks/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: todo.description
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to update");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteTask(todo) {
  try {
    const response = await fetch(`http://localhost:8080/tasks/${todo.id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function changeCompleted(todo) {
  const response = await fetch(`http://localhost:8080/tasks/changeCompleted/${todo.id}`, {
    method: "PUT"
  });
}

export async function getTaskLists() {
  try {
    const response = await fetch("http://localhost:8080/tasklists");
    if (!response.ok) {
      throw new Error("Failed to fetch task lists");
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function createTaskList(name) {
  try {
    const response = await fetch("http://localhost:8080/tasklists", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: name,
    });
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Failed to create task list: ${response.status} ${response.statusText} — ${errorBody}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteTaskList(id) {
  try {
    const response = await fetch(`http://localhost:8080/tasklists/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw new Error("Failed to delete task list");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function getTasksByList(listId) {
  try {
    const response = await fetch(`http://localhost:8080/tasklists/${listId}/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks for list");
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}