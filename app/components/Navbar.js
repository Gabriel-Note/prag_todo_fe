'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <Link href="/" className="navbar__logo">My Project</Link>
      <nav aria-label="Main navigation">
        <ul className="navbar__list">
          <li>
            <Link href="/" aria-current={pathname === '/home' ? 'page' : undefined}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
              About
            </Link>
          </li>
          <li>
            <Link href="/my-lists" aria-current={pathname === '/my-lists' ? 'page' : undefined}>
              My Lists
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
              Contact
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}