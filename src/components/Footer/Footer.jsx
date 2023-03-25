import React from "react";
import "./footer.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const { t } = useTranslation();
  const [language] = UseLocalStorage("language", "en");

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
  `;

  const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    // border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  `;

  return (
    <div className="section__footer">
      <div className="footer__links">
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
            <a href="#contact">
              {t("Aloqa")} {language === "ru" ? t("") : t("")}
            </a>
          </li>

          <li>
            <a href="#about">
              {t("Haqimizda")} {language === "ru" ? t("") : t("")}
            </a>
          </li>

          <li>
            <a href="#faq">
              {t("Savollari")} {language === "ru" ? t("") : t("")}
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__social">
        <a className="social__twit" href="https://twitter.com"><AiOutlineTwitter /></a>
        <a className="social__face" href="https://facebook.com"><BsFacebook /></a>  
        <a className="social__link" href="https://www.linkedin.com/"><AiFillLinkedin /></a>
        <a className="social__tg" href="https://t.me/ad1loff"><BsTelegram /></a>
      </div>

      <div className="footer__contact">
        <form className="footer__form">
          <Container>
            <Newsletter>
              <NewsletterForm />
            </Newsletter>
          </Container>
          {/* <input type="email" placeholder="Your Email" /><br />
          <input type="password" placeholder="Your Password"/><br />
          <input type="button" value="Send Message" /> */}
        </form>
      </div>
    </div>
  );
};

export default Footer;
