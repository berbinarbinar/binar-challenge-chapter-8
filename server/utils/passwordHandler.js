const { compare } = require("bcrypt");
const { hash } = require("bcrypt");

module.exports = {
  hashPassword: async (password) => {
    return await hash(password, 10);
  },
  verifyPassword: async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
  },
};
