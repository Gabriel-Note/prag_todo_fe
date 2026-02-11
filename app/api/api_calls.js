"use server"

export default async function createTask(task){
    try {
        const response = await fetch("http://localhost:8080/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: task
          }),
        });
    }

    catch (error) {
        console.error("Error:", error);
        alert("Failed to create task");
      }
}