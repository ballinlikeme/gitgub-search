import React from "react";
import userIcon from "../img/empty-state/user-not-found-icon.svg";

export const UserNotFound = () => {
  return (
    <div className="start-state">
      <div className="start-state__container">
        <div className="start-state__image">
          <img src={userIcon} alt="Search Icon" />
        </div>
        <p className="start-state__text">User not found</p>
      </div>
    </div>
  );
};
