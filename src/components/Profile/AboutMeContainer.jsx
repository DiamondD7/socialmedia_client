import React, { useState } from "react";

const AboutMeContainer = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [hobbies, setHobbies] = useState(false);
  return (
    <div className="profile-summary__wrapper">
      {aboutMe === true ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum
          minima, laboriosam similique ut accusamus dolorem quod vero animi
          deleniti corporis perferendis aspernatur omnis doloribus maxime, ab
          alias minus harum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi sunt animi autem rem libero earum aut? Impedit, odio
          qui? Ipsa, dolorum pariatur ea quis sunt molestias similique
          necessitatibus
        </p>
      ) : (
        ""
      )}
      {hobbies === true ? <p>HOBBIES HOBBIES HOBBIES</p> : ""}
      <div className="profile-summmary-navigation__container">
        <ul className="profile-summary__nav__wrapper">
          <li>
            <button
              onClick={() => {
                setAboutMe(true);
                setHobbies(false);
              }}
              style={
                aboutMe === true ? { borderBottom: "2px solid #FDD000" } : {}
              }
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setHobbies(true);
                setAboutMe(false);
              }}
              style={
                hobbies === true ? { borderBottom: "2px solid #FDD000" } : {}
              }
            >
              Hobbies
            </button>
          </li>
          <li>
            <button>Links</button>
          </li>
          <li>
            <button>Favourites</button>
          </li>
          <li>
            <button>Quote of the day</button>
          </li>
          <li>
            <button>Music</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMeContainer;
