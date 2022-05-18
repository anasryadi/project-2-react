import React from "react";
import { useEffect, useState } from "react";

function NewsPage() {
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
        <p>{newsItem.description}</p>
        <img src={newsItem.urlToImage} alt="News IMG"  width="900" height="600"></img>

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

// function NewsPage(props) {

//   let newsMap;
//   if (props.news !== null) {
//     newsMap = props.news.map((newsItem) => {
//       // return <h1>{newsItem.title}</h1>;
//       return <a href={newsItem.description}>{newsItem.title}</a>;
//     });
//   }

//   console.log(props.news);

//   return (
//     <div>
//       <h1>News</h1>
//       {newsMap}
//     </div>
//   );
// }

// export default NewsPage;
