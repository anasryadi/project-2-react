import React from 'react'
import { useEffect, useState } from "react";

function Home() {
  const [news, setNews] = useState([]);

  const apiKey = "ea42bb03df5c4e5f88941b56087889c2";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-05-13&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log("error"));
  }, []);

  const newsMap = news.map((newsItem) => {
    return (
      <li>
        {newsItem.title}
      </li>
    );
  });

  return (
    <div>
      <h1>Headlines</h1>
      <ul>{newsMap}</ul>
    </div>
  );

  
  // return (
  //   <div>Headlines</div>
  // )
}

export default Home