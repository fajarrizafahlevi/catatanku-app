import React from 'react';
import { Link } from 'react-router-dom';
import { FiFilePlus, FiFolder } from 'react-icons/fi';

function Navigation() {
  return (
    <nav className="navigation">
      <h1>
        <Link to="/">Catatanku</Link>
      </h1>
      <ul>
        <li>
          <Link to="/notes/new">
            <FiFilePlus title="Tambah" />
          </Link>
        </li>
        <li>
          <Link to="/archives">
            <FiFolder title="Arsip" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
