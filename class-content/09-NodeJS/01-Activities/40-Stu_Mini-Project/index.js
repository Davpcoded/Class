const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt({ message: "enter your user name", name: "username" })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  });
