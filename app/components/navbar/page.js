import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="justify-between items-center flex max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Todo App</h1>
        <nav className="flex space-x-4 ml-4 ">
          <Link href="/" className="hover:text-gray-300 mt-1">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-300 mt-1">
            My lists
          </Link>
          <Link href="/rewards" className="hover:text-gray-300 mt-1">
            Rewards
          </Link>
          <Link href="/login" className="hover:text-gray-300 mt-1">
            Login
          </Link>
          
        </nav>
      </div>
    </header>
  );
}
