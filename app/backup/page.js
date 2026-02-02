import Image from "next/image";

export default async function Home() {
  const resp = await fetch("http://localhost:8080/tasks")
  const data = await resp.json();
  console.log("tasks: ", ...data);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {data.map(d => (
          <li key={d.id}>
            {d.task}
          </li>
        ))}
      </ul>

    </div>

    
  );
}
