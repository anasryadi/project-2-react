import "./App.css";
import Home from "./Components/Home";
import NewsPage from "./Components/NewsPage"
import { Link, Routes, Route } from "react-router-dom";

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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <footer>
      <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/news">
          <h1>News</h1>
        </Link>
      </footer>
    </div>
  );
}

export default App;

