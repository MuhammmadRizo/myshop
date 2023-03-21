import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./quests.css";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import i18 from "../../i18";

const Quests = () => {
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
  const [faqs, setFaqs] = useState([
    {
      question: "Bizda nimalar mavjud?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quasi explicabo magni pariatur excepturi, inventore iusto ex soluta ipsa amet labore odio iste deserunt. Quas iste minima modi suscipit distinctio?",
    },
    {
      question: "Nima uchun ko'pchilik bizni tanlaydi?",
      answer:
        "Chunki bizda tekin yetkazib berish xizmati va har oyda aksiya mavjud!",
    },
  ]);
  const toggleAnswer = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].showAnswer = !newFaqs[index].showAnswer;
    setFaqs(newFaqs);
  };
  return (
    <div className="faq-page">
      <h1 className="faq__title">
        {t("Savollar")} {language === "ru" ? t("") : t("")}
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <h2 onClick={() => toggleAnswer(index)}>{faq.question}</h2>
          {faq.showAnswer && <p>{faq.answer} </p>}
        </div>
      ))}
    </div>
  );
};

export default Quests;
