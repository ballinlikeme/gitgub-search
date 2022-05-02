import React from "react";
import { Repo } from "./Repo";
import repoIcon from "../img/empty-state/repository-list-is-empty.svg";

export const Repositories = ({
  userRepositories,
  repositoriesPerPage,
  currentPage,
}) => {
  if (userRepositories.length === 0) {
    return (
      <section className="page__repositories repositories-not-found">
        <div className="repositories-not-found__container">
          <div className="repositories-not-found__image">
            <img src={repoIcon} alt="Repo Icon" />
          </div>
          <p className="repositories-not-found__text">
            Repository list is empty
          </p>
        </div>
      </section>
    );
  }

  if (userRepositories) {
    const startIndex = (currentPage - 1) * repositoriesPerPage; //
    const endIndex = currentPage * repositoriesPerPage; //
    const paginatedList = userRepositories.slice(startIndex, endIndex);
    return (
      <section className="page__repositories repositories">
        <h2 className="repositories__title">
          Repositories ({userRepositories.length})
        </h2>
        <ul className="repositories__list">
          {paginatedList.map((repo) => {
            return (
              <Repo
                url={repo.html_url}
                name={repo.name}
                description={repo.description}
              />
            );
          })}
        </ul>
      </section>
    );
  }
};
