import React from "react";
import { useTranslation } from "react-i18next";
import "./header.css";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import i18 from "../../i18";

const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = UseLocalStorage("language", "en");

  const handleLanguageChange = () => {
    if (language === "uz") {
      i18.changeLanguage("ru");
      setLanguage("ru");
    } else if (language === "ru") {
      i18.changeLanguage("uz");
      setLanguage("uz");
    }
  };
  return (
    <div className="header__section">
      <header>
        <div className="header__links">
          <ul>
            <li>
              <a href="#home">
                {t("Bosh sahifa")} {language === "ru" ? t("") : t("")}
              </a>
            </li>
            <li>
              <a href="#mebel">
                {t("Mebellar")} {language === "ru" ? t("") : t("")}
              </a>
            </li>

            <li>
              <a href="#contact">{t("Aloqa")} {language === "ru" ? t("") : t("")}</a>
            </li>
          </ul>
        </div>

        <div className="header__selection">
          <button className="number__btn">(+998) 999 99 99</button>
          <button className="tr__btn" onClick={handleLanguageChange}>
            {t("UZB")} {language === "ru" ? t("") : t("")}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
