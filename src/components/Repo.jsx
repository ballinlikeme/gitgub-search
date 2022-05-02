import React from "react";

export const Repo = ({ url, description, name }) => {
  return (
    <li className="repositories__element element-repositories">
      <h3 className="element-repositories__title">
        <a rel="noreferrer" target="_blank" href={url}>
          {name}
        </a>
      </h3>
      <p className="element-repositories__text">
        {description || "No description."}
      </p>
    </li>
  );
};
