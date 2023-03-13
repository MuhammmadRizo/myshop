import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header__section">
      <header>
        <div className="header__links">
          <ul>
            <li>
              <a href="#home">Bosh sahifa</a>
            </li>
            <li>
              <a href="#mebel">Mebellar</a>
            </li>
          </ul>
        </div>

        <div className="header__selection">
            <select>
                <option value="UZB">UZB</option>
                <option value="EN">EN</option>
                <option value="RUS">RUS</option>
            </select>
        </div>
      </header>
    </div>
  );
};

export default Header;
