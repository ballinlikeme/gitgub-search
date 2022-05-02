import React from "react";
import gitHubLogo from "../img/header/github-logo.svg";

export const Search = ({ saveUserName }) => {
  const getUserName = (event) => {
    if (event.key === "Enter") {
      saveUserName(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__icon">
          <img src={gitHubLogo} alt="GitHub Logo" />
        </div>
        <div className="header__input">
          <input
            placeholder="Enter GitHub username"
            onKeyDown={getUserName}
            type="text"
          />
        </div>
      </div>
    </header>
  );
};
