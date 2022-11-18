import client from "./client";

const endpoints = {
  getRandomUser: client(
    "GET",
    `https://jsonplaceholder.typicode.com/users/${
      Math.floor(Math.random() * 10) + 1
    }`
  ),
};

export default endpoints;
