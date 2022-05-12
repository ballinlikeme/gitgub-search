import React from "react";
import searchIcon from "../img/start-state/search-icon.svg";

export const StartState = () => {
  return (
    <div className="start-state">
      <div className="start-state__container">
        <div className="start-state__image">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <p className="start-state__text">
          Start with searching
          <br />
          <br /> a GitHub user
        </p>
      </div>
    </div>
  );
};
