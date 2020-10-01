import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    // You code goes here
    return fetch(`https://api.github.com/users/${nickname}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((answer) => {
        if (answer.message === "Not Found") {
          throw new Error("User don't exist");
        }
        return answer.repos_url;
      });
  }

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  static printRepository() {
    // You code goes here
  }

  static getProjectInformations() {
    // You code goes here
  }
}
