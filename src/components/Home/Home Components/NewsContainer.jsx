import React, { useEffect, useState } from "react";
import { LATEST_NEWS } from "../../../assets/js/API_AUTH";

import "../../../styles/newscontainerstyles.css";
const NewsContainer = () => {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    fetch(`${LATEST_NEWS}${import.meta.env.VITE_NEWS_API_KEY}`, {})
      .then((res) => res.json())
      .then((data) => {
        setLatestNews(data.articles);
      });
  }, []);

  return (
    <div>
      <div className="news-main-container__wrapper">
        <div className="news-container__wrapper">
          <h2 className="news-container__title__header">News</h2>
          <ul className="news-container__news-title__wrapper">
            {latestNews.map((data, index) => (
              <li key={index}>
                <a href={data.url} target="_blank">
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
