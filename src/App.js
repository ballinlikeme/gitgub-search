import "./css/style.css";
import { Search } from "./components/Search";
import { useState } from "react";
import { getUserData, getUserRepositories } from "./js/api";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";
import { Pagination } from "./components/Pagination";
import { UserNotFound } from "./components/UserNotFound";
import { StartState } from "./components/StartState";
import { Loader } from "./components/Loader";

function App() {
  const [userData, setUserData] = useState(null);
  const [userRepositories, setUserRepositories] = useState(null);

  const [loader, setLoader] = useState(false);

  const [repositoriesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const getUser = async (userName) => {
    setLoader(true);
    const userData = await getUserData(userName);
    setUserData(userData);

    const userRepositoriesData = await getUserRepositories(userName);
    setUserRepositories(userRepositoriesData);
    setLoader(false);
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  if (userData === null) {
    return (
      <div className="wrapper">
        <Search saveUserName={getUser} />
        <StartState />
      </div>
    );
  }

  if (userData === false) {
    return (
      <div className="wrapper">
        <Search saveUserName={getUser} />
        <UserNotFound />
      </div>
    );
  }

  if (loader) {
    return (
      <div className="wrapper">
        <Search saveUserName={getUser} />
        <Loader />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Search saveUserName={getUser} />
      <main className="page">
        <div
          className="page__container _container"
          style={{
            alignItems: userRepositories.length === 0 && "center",
          }}
        >
          <Profile userData={userData} />
          <Repositories
            repositoriesPerPage={repositoriesPerPage}
            currentPage={currentPage}
            userRepositories={userRepositories}
          />
        </div>
      </main>
      <Pagination
        paginate={paginate}
        userRepositories={userRepositories}
        repositoriesPerPage={repositoriesPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
