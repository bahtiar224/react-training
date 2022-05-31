import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Style/Catalog/CatStyle.css';

const Navbar = () => {
    return (
        <div className="navbar">
          <Link to="/" className={window.location.pathname == '/' ? "active":""}>Home</Link>
          <a href="/catalog/Seafood" className={window.location.pathname == '/catalog/Seafood' ? "active":""}>Seafood</a>
          <a href="/catalog/Beef" className={window.location.pathname == '/catalog/Beef' ? "active":""}>Beef</a>
        </div>
    );
}

export default Navbar