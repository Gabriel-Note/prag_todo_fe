import TodoClient from "./components/TodoClient";

export default async function Home() {
  const resp = await fetch("http://localhost:8080/tasks",{
    cache: 'no-store'
  });
  const data = await resp.json();

  return (
    <TodoClient todoClientData={data}/> 
  );
}