import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./body.css";
import CardIMG from "../assets/foto1.jpg";
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
    <div className="body__section">
      <div className="cards">
        <div className="first__card card">
          <img src={CardIMG} alt="" />

          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>

          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>

        <div className="first__card card">
          <img src={CardIMG} alt="" />

          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>

          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>

        <div className="first__card card">
          <img src={CardIMG} alt="" />
          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>
          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>

        <div className="first__card card">
          <img src={CardIMG} alt="" />

          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>

          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>

        <div className="first__card card">
          <img src={CardIMG} alt="" />

          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>

          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>
        <div className="first__card card">
          <img src={CardIMG} alt="" />
          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>
          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>
        <div className="first__card card">
          <img src={CardIMG} alt="" />

          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>

          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>
        <div className="first__card card">
          <img src={CardIMG} alt="" />

          <div className="first__card-prices">
            <div className="card__left">
              <span>
                <AiFillStar style={{ color: "#FEB822" }} />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />{" "}
                <AiOutlineStar style={{ margin: "0 0 0 -5px" }} />
              </span>
              <p className="prices">$4.5</p>
            </div>

            <div className="card__right">
              <h1>
                {t("Mebel")} {language === "ru" ? t("") : t("")}
              </h1>
              <p>
                {t("Yangi mebel")} {language === "ru" ? t("") : t("")}
              </p>
            </div>
          </div>

          <form action="">
            <button className="first__card-btn btn">
              {t("Batafsil")} {language === "ru" ? t("") : t("")}
            </button>
            <button className="first__card-btn btn">
              {t("Sotib olish")} {language === "ru" ? t("") : t("")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
