console.log("before");

console.log("After");

const getUser = id => {
  return new Promise(resolve, reject => {
    setTimeout(() => {
      console.log("Reading user from the database");
      resolve({ id: id, gitHubUserName: "Njoku" });
    }, 2000);
  });
};

getUser(1)
  .then(user => getRepos(user.gitHubUserName))
  .then(repos => getCommits(repo[0]))
  .then(getCommits => console.log(commits))
  .catch(err => error.message);
const getRepos = username => {
  return new Promise(resolve, reject => {
    setTimeout(
      () => {
        console.log("fetching repos..");
        resolve(["repo1", "repo2", "repo3"]);
      },

      2000
    );
  });
};
const getCommits = repo => {
  return new Promise(resolve, reject => {
    setTimeout(
      () => {
        console.log("Fetchin commitss...");
        resolve(["commit"]);
      },

      2000
    );
  });
};
