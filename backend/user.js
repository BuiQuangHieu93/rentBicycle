const fetch = require("node-fetch");
const response = fetch("http://localhost:5000/users");
const user = response.json();

module.exports = user;
