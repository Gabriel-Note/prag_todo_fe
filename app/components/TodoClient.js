"use client";

import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoListEdit from "./TodoListEdit";
import { createTask, getTaskLists, createTaskList, deleteTaskList, getTasksByList } from "../api/api_calls";

export default function TodoClient() {
  const [editTodos, setEditTodos] = useState(true);
  const [task, setTask] = useState("");
  const [taskLists, setTaskLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [todos, setTodos] = useState([]);
  const [newListName, setNewListName] = useState("");

  async function fetchTaskLists(selectLatest = false) {
    const data = await getTaskLists();
    const lists = Array.isArray(data) ? data : [];
    setTaskLists(lists);
    if (lists.length > 0 && (!selectedList || selectLatest)) {
      setSelectedList(selectLatest ? lists[lists.length - 1] : lists[0]);
    }
  }

  async function fetchTodos(listId) {
    if (!listId) return;
    const data = await getTasksByList(listId);
    setTodos(Array.isArray(data) ? data : []);
  }

  useEffect(() => {
    fetchTaskLists();
  }, []);

  useEffect(() => {
    if (selectedList?.id) {
      fetchTodos(selectedList.id);
    }
  }, [selectedList]);

  const handleCreateList = async (e) => {
    e.preventDefault();
    await createTaskList(newListName);
    setNewListName("");
    fetchTaskLists(true);
  };

  const handleDeleteList = async (id) => {
    await deleteTaskList(id);
    setSelectedList(null);
    setTodos([]);
    fetchTaskLists();
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!selectedList) return;
    await createTask(task, selectedList.id);
    setTask("");
    fetchTodos(selectedList.id);
  };

  return (
    <section className="mx-auto w-full max-w-lg rounded-xl bg-white border-4 p-6 shadow">
      <h1 className="mb-4 text-2xl text-center text-zinc-800 font-bold">📝 My Todos</h1>

      {/* Skapa ny lista */}
      <form onSubmit={handleCreateList} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New list name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          required
          className="flex-1 px-3 py-2 border rounded text-black"
        />
        <button type="submit" className="rounded-md bg-green-900 px-4 py-2 text-white">
          + List
        </button>
      </form>

      {/* Välj lista */}
      <div className="mb-4 flex flex-wrap gap-2">
        {taskLists.map((list) => (
          <div key={list.id} className="flex items-center gap-1">
            <button
              onClick={() => setSelectedList(list)}
              className={`px-3 py-1 rounded-md text-white ${selectedList?.id === list.id ? "bg-green-900" : "bg-zinc-500"}`}
            >
              {list.name}
            </button>
            <button
              onClick={() => handleDeleteList(list.id)}
              className="px-2 py-1 rounded-md bg-red-500 text-white text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Skapa task */}
      {selectedList && (
        <form onSubmit={handleCreateTask} className="mb-4 space-y-2 text-black">
          <input
            type="text"
            placeholder={`Add task to "${selectedList.name}"`}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
          <button type="submit" className="w-full rounded-md bg-green-900 px-4 py-2 text-white">
            Add Task
          </button>
        </form>
      )}

      {/* Edit-läge-knapp */}
      {selectedList && (
        <button
          onClick={() => setEditTodos(edit => !edit)}
          className="mb-4 w-full rounded-md bg-black px-4 py-2 text-white"
        >
          {editTodos ? "Edit" : "Stop editing"}
        </button>
      )}

      {/* Visa tasks */}
      {selectedList && (
        <div className="bg-[#ecc79f] border-2 border-green-900 rounded-md p-4">
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
      )}
    </section>
  );
}