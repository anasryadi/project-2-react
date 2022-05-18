import React from "react";

function NewsPage(props) {
  let newsMap;
  if (props.news !== null) {
    newsMap = props.news.map((newsItem) => {
      return <h1>{newsItem.title}</h1>;
    });
  }

  console.log(props.news);

  return (
    <div>
      <h1>News</h1>
      {newsMap}
    </div>
  );
}

export default NewsPage;
