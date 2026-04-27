"use client";

import { useState } from "react";
import ListsSidebar from "./ListsSidebar";
import TodoClient from "../todo/TodoClient";

export default function ListsPageClient() {
  const [selectedList, setSelectedList] = useState(null);

  return (
    <div className="flex flex-row gap-4 p-6">
      <div className="flex-[0.25]">
      
        {/* LEFT SIDE */}
        <ListsSidebar
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
      </div>
      <div className="flex-1">

        {/* RIGHT SIDE */}
        <TodoClient selectedList={selectedList} />

      </div>
    </div>
  );
}