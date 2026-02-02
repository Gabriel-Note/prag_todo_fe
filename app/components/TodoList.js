import Image from "next/image";

export default function TodoList({todoListData}) {
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {todoListData.map(d => (
          <li key={d.id}>
            {d.task}
          </li>
        ))}
      </ul>

    </div>
  );
}
