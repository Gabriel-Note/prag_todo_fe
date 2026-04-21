import TodoClient from '../components/TodoClient';

const resp = await fetch("http://localhost:8080/tasks",{
    cache: 'no-store'
  });
  const data = await resp.json();
  
export const metadata = { title: 'My Lists' };

export default function MyListsPage() {
  return <TodoClient />;
}