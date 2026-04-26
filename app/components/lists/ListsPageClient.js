"use client";

import { useState } from "react";
import ListsSidebar from "./ListsSidebar";
import TodoClient from "../todo/TodoClient";

export default function ListsPageClient() {
  const [selectedList, setSelectedList] = useState(null);

  return (
    <div className="flex gap-6 p-6">
      
      {/* LEFT SIDE */}
      <ListsSidebar
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />

      {/* RIGHT SIDE */}
      <TodoClient selectedList={selectedList} />

    </div>
  );
}