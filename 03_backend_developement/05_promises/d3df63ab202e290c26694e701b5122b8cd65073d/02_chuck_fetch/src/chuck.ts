import fetch, { Response } from "node-fetch";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}

function getChuckNorrisJoke(category: string): Promise<string> {
  // Your code goes here
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((response) => response.value);
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
