"use server"

export async function createTask(task) {
  try {
    const response = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: task
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    return response.JSON
  }

  catch (error) {
    console.error("Error:", error);
    throw error;
  }

}

export async function editTask(todo) {
  try {
    console.log("this is the todo id: " + todo.id);
    console.log("this is the todo description: " + todo.description);
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
  }
  catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function deleteTask(todo) {
  try {
    const response = await fetch(`http://localhost:8080/tasks/${todo.id}`, {
      method: "DELETE"
    });
  }
  catch (error) {
    console.error("Error:", error);
    throw error;
  }
} 
