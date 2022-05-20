import React from "react";
import { useEffect, useState } from "react";

function Home() {
  const [news, setNews] = useState([]);

  const apiKey = "a83ff4f6232b4474bda4a51231b3839e";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log("error"));
  }, []);

  const newsMap = news.map((newsItem) => {
    return (
      <li>
        <a href={newsItem.url} target="_blank" rel="noopener noreferrer">{newsItem.title}</a>
      </li>
    );
  });

  return (
    <div className="homeDiv">
      <h1>Headlines</h1>
      <ul>{newsMap}</ul>
    </div>
  );
}

export default Home;
