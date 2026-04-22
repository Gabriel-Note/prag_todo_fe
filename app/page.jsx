
export default async function Home() {
   const resp = await fetch("http://localhost:8080/tasks",{
    cache: 'no-store'
  });
  const data = await resp.json();
 
  return (
    <main className="home">
      <h1>Just a test</h1>
      <p>Welcome to your simple and efficient to-do list app. This project was created to help users stay organized, manage tasks, and keep track of daily responsibilities in an easy and intuitive way.</p>

      <p>Whether you're planning your day, managing school assignments, or just keeping a list of things to remember, this app is designed to make productivity straightforward and stress-free. Add tasks, mark them as complete, and stay on top of what matters most.</p>



    </main>
  );

}