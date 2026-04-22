"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  function handleLogOut() {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
    window.location.reload();
  }

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
          {isLoggedIn ? (
            <button className="mt-1" onClick={handleLogOut}
            id="signOut">Your Account</button>
          ) : (
            <Link href="/login" className="hover:text-gray-300 mt-1">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
