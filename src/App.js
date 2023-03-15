// import { useTranslation } from "react-i18next";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
// import UseLocalStorage from "./hooks/UseLocalStorage";
// import i18 from "./i18";

function App() {
  // const { t } = useTranslation();
  // const [language, setLanguage] = UseLocalStorage("language", "en");

  // const handleLanguageChange = () => {
  //   if ((language === "en")) {
  //     i18.changeLanguage("ru");
  //     setLanguage("ru");
  //   } else if ((language === "ru")) {
  //     i18.changeLanguage("en");
  //     setLanguage("en");
  //    }// else if ((language === "ru", "en")) {
  //   //   i18.changeLanguage("uz");
  //   //   setLanguage("uz");
  //   // }
  // };

  return (
    <div className="App">
      <Header />
      <Body />
      <br />
    </div>
  );
}

export default App;
