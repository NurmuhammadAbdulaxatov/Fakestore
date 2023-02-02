import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <p className="logo">Logo Here</p>
            <span>FAKESTORE</span>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Profil</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
