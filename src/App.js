import "./App.css";
import Home from "./Components/Home";
import NewsPage from "./Components/NewsPage"
import BitcoinNews from "./Components/BitcoinNews";
import { Link, Routes, Route } from "react-router-dom";
import AppleNews from "./Components/AppleNews";


function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/news">
          <h1>News</h1>
        </Link>
        <Link to = "/bitcoin">
        <h1>Bitcoin News</h1>
        </Link>
        <Link to = "/apple">
        <h1>Apple News</h1>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/bitcoin" element={<BitcoinNews />} />
        <Route path="/apple" element={<AppleNews />} />
      </Routes>
      <footer>
      <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/news">
          <h1>News</h1>
        </Link>
        <Link to="/bitcoin">
        <h1>Bitcoin News</h1>
        </Link>
      </footer>
    </div>
  );
}

export default App;

// "homepage": "https://anasryadi.github.io/project-2-react/",