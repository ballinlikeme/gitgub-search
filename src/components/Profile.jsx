import React from "react";
import { normalizeNumber } from "../js/functions";

export const Profile = ({ userData }) => {
  if (userData) {
    return (
      <aside className="page__profile profile">
        <div className="profile__image">
          <img src={userData.avatar_url} alt="Profile" />
        </div>
        <h2 className="profile__name">{userData.name || "No name"}</h2>
        <div className="profile__nickname">
          <a rel="noreferrer" target="_blank" href={userData.html_url}>
            {userData.login}
          </a>
        </div>
        <div className="profile__stats stats">
          <div className="stats__followers">
            {normalizeNumber(userData.followers)} followers
          </div>
          <div className="stats__following">
            {normalizeNumber(userData.following)} following
          </div>
        </div>
      </aside>
    );
  }
};
