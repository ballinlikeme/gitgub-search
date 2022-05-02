import React from "react";

export const Pagination = ({
  userRepositories,
  repositoriesPerPage,
  currentPage,
  paginate,
}) => {
  if (userRepositories) {
    const startIndex = (currentPage - 1) * repositoriesPerPage; //
    const endIndex = currentPage * repositoriesPerPage; //
    const paginatedList = userRepositories.slice(startIndex, endIndex);

    const firstRepo = userRepositories.indexOf(paginatedList[0]) + 1;
    const lastRepo =
      userRepositories.indexOf(paginatedList[paginatedList.length - 1]) + 1;

    let pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(userRepositories.length / repositoriesPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const goToTheNextPage = () => {
      if (pageNumbers[pageNumbers.length - 1] >= currentPage + 1) {
        paginate(currentPage + 1);
      }
    };

    const goToThePrevPage = () => {
      if (currentPage > 1) {
        paginate(currentPage - 1);
      }
    };

    if (userRepositories.length > 4) {
      return (
        <footer className="footer">
          <div className="footer__container _container">
            <div className="footer__amount">
              {firstRepo}-{lastRepo} of {userRepositories.length} items
            </div>
            <div className="footer__pagination pagination">
              <div
                onClick={goToThePrevPage}
                className="pagination__arrow pagination__arrow-left"
              ></div>
              <ul className="pagination__pages">
                {pageNumbers.map((number) => (
                  <li
                    onClick={() => {
                      paginate(number);
                    }}
                    key={number}
                    className={currentPage === number && "_active"}
                  >
                    {number}
                  </li>
                ))}
              </ul>
              <div
                onClick={goToTheNextPage}
                className="pagination__arrow pagination__arrow-right"
              ></div>
            </div>
          </div>
        </footer>
      );
    }
  }
};
