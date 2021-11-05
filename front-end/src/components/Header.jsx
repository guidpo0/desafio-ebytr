import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import './Header.css';

function Header() {
  const { links } = useContext(DataContext);
  return (
    <header className="header-container">
      <h1>Ebytr - Tarefas</h1>
      <nav className="nav-container">
        {links.map((link) => (
          <Link key={link.name} to={link.url}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
