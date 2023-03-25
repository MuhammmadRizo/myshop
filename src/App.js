import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Quests from "./components/Quests/Quests";
import TextDiscription from "./components/TextDiscription/TextDiscription";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <TextDiscription />
      <Quests />
      <Footer />
    </div>
  );
}

export default App;
