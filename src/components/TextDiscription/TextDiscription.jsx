import React from 'react'
import './textdiscription.css'
import { useTranslation } from "react-i18next";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import i18 from "../../i18";
import CardRight from "../assets/foto1.jpg"


const TextDiscription = () => {
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
    <div className='decarition__section'>
        <h1 className='haqimizda'>{t("Haqimizda")} {language === "ru" ? t("") : t("")}</h1>

        <div className="card__about">
          <div className="left">
            <p>{t("Text")} {language === "ru" ? t("") : t("")}</p>
          </div>

          <div className="right">
            <img src={CardRight} alt="" />
          </div>
        </div>
    </div>
  )
}

export default TextDiscription