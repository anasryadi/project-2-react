import React from "react";
import { useEffect, useState } from "react";

function NewsPage() {
  const [news, setNews] = useState([]);

  const apiKey = "a83ff4f6232b4474bda4a51231b3839e";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=a&from=2022-05-20&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.log("error"));
  }, []);

  const newsMap = news.map((newsItem) => {
    console.log(newsItem);

    return (
      <li>
        <a href={newsItem.url}>{newsItem.title}</a>

        <p>{newsItem.description}</p>
        <img
          src={newsItem.urlToImage}
          alt="News IMG"
          width="900"
          height="600"
        ></img>
      </li>
    );
  });

  return (
    <div>
      <h1>News</h1>
      <ul>{newsMap}</ul>
    </div>
  );
}

export default NewsPage;
