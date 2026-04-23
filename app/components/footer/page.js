export default function Footer() {
  return (
    <footer className="border-t mt-8 p-4 text-left fixed bottom-0 w-full bg-blue-950">
      <p>© {new Date().getFullYear()} The Greatest To Do List That Ever Was™</p>
    </footer>
  );
}