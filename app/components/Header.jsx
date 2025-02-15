import React from 'react';
import Link from 'next/link';
import NavLink from './ui/NavLink';

const Header = () => {
  return (
    <div>
      {' '}
      <header className="flex justify-center bg-gray-300 py-4">
        <nav className="">
          <ul className="flex gap-8">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
