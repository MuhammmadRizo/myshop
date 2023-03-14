import { useEffect, useState } from "react";
import "./header.css";
import Translation from "./Data.json";

const Header = () => {
  const [language, setLanguage] = useState(["UZB"]);
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language == "UZB") {
      setContent(Translation.UZB);
    } else if (language == "ENG") {
      setContent(Translation.ENG);
    } else if (language == "RUS") {
      setContent(Translation.RUS);
    }
  });

  return (
    <div className="header__section">
      <header>
        <div className="header__links" >
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
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="UZB">UZB</option>
            <option value="ENG">ENG</option>
            <option value="RUS">RUS</option>
          </select>
        </div>
      </header>
    </div>
  );
};

export default Header;
