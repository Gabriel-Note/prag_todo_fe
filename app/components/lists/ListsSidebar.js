"use client";

import { useEffect, useState } from "react";
import {
  getTaskLists,
  createTaskList,
  deleteTaskList,
} from "../../api/api_calls";

export default function ListsSidebar({ selectedList, setSelectedList }) {
  const [taskLists, setTaskLists] = useState([]);
  const [newListName, setNewListName] = useState("");

  async function fetchTaskLists(selectLatest = false) {
    const data = await getTaskLists();
    const lists = Array.isArray(data) ? data : [];

    setTaskLists(lists);

    if (lists.length > 0 && (!selectedList || selectLatest)) {
      setSelectedList(selectLatest ? lists[lists.length - 1] : lists[0]);
    }
  }

  useEffect(() => {
    fetchTaskLists();
  }, []);

  const handleCreateList = async (e) => {
    e.preventDefault();
    await createTaskList(newListName);
    setNewListName("");
    fetchTaskLists(true);
  };

  const handleDeleteList = async (id) => {
    await deleteTaskList(id);
    setSelectedList(null);
    fetchTaskLists();
  };

  return (
    <div className="w-75 bg-white border p-2 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4 text-black">Lists</h2>

      {/* Create list */}
      <form onSubmit={handleCreateList} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New list"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          required
          className="flex-1 px-2 py-1 border rounded text-black"
        />
        <button className="bg-green-900 text-white px-3 py-1 rounded">
          +
        </button>
      </form>

      {/* Lists */}
      <div className="flex flex-col gap-2">
        {taskLists.map((list) => (
          <div key={list.id} className="flex gap-1">
            <button
              onClick={() => setSelectedList(list)}
              className={`flex-1 px-2 py-1 rounded text-white ${
                selectedList?.id === list.id
                  ? "bg-blue-800"
                  : "bg-blue-950"
              }`}
            >
              {list.name}
            </button>

            <button
              onClick={() => handleDeleteList(list.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}