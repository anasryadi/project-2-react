import "./App.css";
import Home from "./Components/Home";
import NewsPage from "./Components/NewsPage"
import { Link, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>home</h1>
        </Link>
        <Link to="/news">
          <h1>news</h1>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
}

export default App;



// function App() {
//   const [news, setNews] = useState(null);

//   const apiKey = "ea42bb03df5c4e5f88941b56087889c2";
//   useEffect(() => {
//     fetch(
//       `https://newsapi.org/v2/everything?q=Apple&from=2022-05-13&apiKey=${apiKey}`
//     )
//       .then(response => response.json())
//       .then(data => setNews(data.articles))
//       // .then((data) => console.log(data))
//       .catch((error) => console.log("error"));
//   }, []);
//   console.log(news)

//   return (
//     <div className="App">
//       <nav>
//         <Link to="/">
//           <h1>home</h1>
//         </Link>
//         <Link to="/news">
//           <h1>news</h1>
//         </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/news" element={<NewsPage news={news} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;