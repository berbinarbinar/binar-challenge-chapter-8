const axios = require("axios");

const getUser = () => {
  return axios("http://localhost:4000/api/v1/players");
};

const test = async () => {
  const users = await getUser();
  console.log(users);
};

test();
