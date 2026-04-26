import TodoClient from '../components/TodoClient';
import { createTaskList, getTaskLists } from '../api/api_calls';

const resp = await fetch("http://localhost:8080/tasks",{
    cache: 'no-store'
  });
  const data = await resp.json();
  
export const metadata = { title: 'My Lists' };

export default function MyListsPage() {
  


  return( 
    <html lang="en">
      <body>
        <title>My Lists - PRAG Todo App</title>
  
    <h1>My Lists</h1>
    <p>Here you can manage your task lists and tasks.</p>
  
  <TodoClient />
      </body>
    </html>
  );
}