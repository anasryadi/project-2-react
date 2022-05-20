import "./App.css";
import Home from "./Components/Home";
import NewsPage from "./Components/NewsPage";
import BitcoinNews from "./Components/BitcoinNews";
import { Link, Routes, Route } from "react-router-dom";
import AppleNews from "./Components/AppleNews";
import DogeNews from "./Components/DogeNews";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/news">
          <h2>News</h2>
        </Link>
        <Link to="/apple">
          <h2>Apple News</h2>
        </Link>
        <Link to="/bitcoin">
          <h2>Bitcoin News</h2>
        </Link>
        <Link to="/doge">
          <h2>Dogecoin News</h2>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/bitcoin" element={<BitcoinNews />} />
        <Route path="/apple" element={<AppleNews />} />
        <Route path="/doge" element={<DogeNews />} />
      </Routes>
      <footer>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/news">
          <h2>News</h2>
        </Link>
        <Link to="/apple">
          <h2>Apple News</h2>
        </Link>
        <Link to="/bitcoin">
          <h2>Bitcoin News</h2>
        </Link>
        <Link to="/doge">
          <h2>Dogecoin News</h2>
        </Link>
      </footer>
    </div>
  );
}

export default App;

// "homepage": "https://anasryadi.github.io/project-2-react/",
