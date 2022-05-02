export const getUserData = async (userName) => {
  const f = await fetch(`https://api.github.com/users/${userName}`);
  const userData = await f.json();

  if (userData.message === "Not Found") {
    return false;
  }

  return userData;
};

export const getUserRepositories = async (userName) => {
  const f = await fetch(`https://api.github.com/users/${userName}/repos`);
  const userRepositoriesData = await f.json();

  if (userRepositoriesData.message === "Not Found") {
    return false;
  }

  return userRepositoriesData;
};
