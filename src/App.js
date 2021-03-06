import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogues from "./components/Dialogues/Dialogues";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogues" element = {<Dialogues />}/>
          <Route path="/profile" element = {<Profile />}/>
          <Route path="/news" element = {<News />}/>
          <Route path="/music" element = {<Music />}/>
          <Route path="/settings" element = {<Settings />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
