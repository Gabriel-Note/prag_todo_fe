import TodoClient from "./components/TodoClient";

export default async function Home() {
   const resp = await fetch("http://localhost:8080/tasks",{
    cache: 'no-store'
  });
  const data = await resp.json();
 
  return (
    <main className="home">
      <h1>Just a test</h1>
      But this is the story of a goup of friends who wanted to create a simple to do app, but ended up 
      creating a complex one instead. After a lot of fun and a lot of work, they finally created the app and it was a huge success... or was it?

      It seemed that the app was too complex for the users, and they didn't know how to use it. So they decided to create a simpler version of the app, and it was a huge success! The users loved the simple version of the app, and they were able to use it without any problems. The friends were happy that they were able to create an app that was useful for the users, and they lived happily ever after.

      
      



    </main>
  );

}