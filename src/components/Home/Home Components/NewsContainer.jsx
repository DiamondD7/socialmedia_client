import React from "react";

import "../../../styles/newscontainerstyles.css";
const NewsContainer = () => {
  return (
    <div>
      <div className="news-main-container__wrapper">
        <div className="news-container__wrapper">
          <h2 className="news-container__title__header">News</h2>
          <ul className="news-container__news-title__wrapper">
            <li>
              'Guess What?' Stephen Colbert Has News For 'Divorce' Fiend
              Marjorie Taylor Greene
            </li>
            <li>Bizarre sight over Sydney stuns onlookers: 'What is it?'</li>
            <li>
              Donald Trump Jr. Gets Scathing Reminder Of His Father's 'Mental
              Competency'
            </li>
            <li>
              Virginia Democrat Wins Special Election to Replace Late
              Congressman — and Makes History in the Process
            </li>
            <li>
              Kourtney Kardashian Shares Photos from Romantic 'Snowed-In'
              Valentine's Day Trip with Husband Travis Barker
            </li>
            <li>
              Black Panther's Letitia Wright Clears Up Comments About Third
              Movie
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
