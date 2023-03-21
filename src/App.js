import "./App.css";
import Body from "./components/Body/Body";
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
    </div>
  );
}

export default App;
