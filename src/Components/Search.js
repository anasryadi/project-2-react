import React from "react";
import { useState } from "react";

const Search = () => {
  const [news, setNews] = useState([]);

  const apiKey = "a83ff4f6232b4474bda4a51231b3839e";

  const [searchValue, setSearchValue] = useState("");

  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  function searchSubmit(event) {
    event.preventDefault();
    apiFetch()
  }

//   useEffect(() => {
    function apiFetch() {
      fetch(
        `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log("error"));
    }
//   }, []);

  const newsMap = news.map((newsItem) => {
    console.log(newsItem);

    return (
      <li>
        <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
          {newsItem.title}
        </a>

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
      <h1>Apple News</h1>
      <ul>{newsMap}</ul>
      <form onSubmit={searchSubmit}>
        <input type="text" onChange={searchHandler} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;
