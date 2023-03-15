import React from 'react'
import './body.css'
import CardIMG from '../assets/foto1.jpg'
import UseLocalStorage from "../../hooks/UseLocalStorage";
import i18 from "../../i18";
import { useTranslation } from "react-i18next";

const Body = () => {
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
    <div className='body__section'>
        <div className="cards">

            <div className="first__card card">
                <img src={CardIMG} alt="" />

                <h1>{t("Mebel")} {language === "ru" ? t("") : t("")}</h1>
                <p>{t("Yangi mebel")} {language === "ru" ? t("") : t("")}</p>

                <form action="">
                    <button className='first__card-btn btn'>
                    {t("Sotib olish")} {language === "ru" ? t("") : t("")}
                    </button>
                </form>
            </div>


            <div className="first__card card">
                <img src={CardIMG} alt="" />

                <h1>{t("Mebel")} {language === "ru" ? t("") : t("")}</h1>
                <p>{t("Yangi mebel")} {language === "ru" ? t("") : t("")}</p>

                <form action="">
                    <button className='first__card-btn btn'>
                    {t("Sotib olish")} {language === "ru" ? t("") : t("")}
                    </button>
                </form>
            </div>
            
            <div className="first__card card">
                <img src={CardIMG} alt="" />

                <h1>{t("Mebel")} {language === "ru" ? t("") : t("")}</h1>
                <p>{t("Yangi mebel")} {language === "ru" ? t("") : t("")}</p>

                <form action="">
                    <button className='first__card-btn btn'>
                    {t("Sotib olish")} {language === "ru" ? t("") : t("")}
                    </button>
                </form>
            </div>

            <div className="first__card card">
                <img src={CardIMG} alt="" />

                <h1>{t("Mebel")} {language === "ru" ? t("") : t("")}</h1>
                <p>{t("Yangi mebel")} {language === "ru" ? t("") : t("")}</p>

                <form action="">
                    <button className='first__card-btn btn'>
                    {t("Sotib olish")} {language === "ru" ? t("") : t("")}
                    </button>
                </form>
            </div>
            
            <div className="first__card card">
                <img src={CardIMG} alt="" />

                <h1>{t("Mebel")} {language === "ru" ? t("") : t("")}</h1>
                <p>{t("Yangi mebel")} {language === "ru" ? t("") : t("")}</p>

                <form action="">
                    <button className='first__card-btn btn'>
                    {t("Sotib olish")} {language === "ru" ? t("") : t("")}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Body