require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV,
    "password": process.env.DB_PASSWORD_DEV,
    "database": process.env.DB_DEV,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 35777
  },
  "test": {
    "username": process.env.DB_USERNAME_TEST,
    "password": process.env.DB_PASSWORD_TEST,
    "database": process.env.DB_TEST,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 35777
  },
  "production": {
    "username": process.env.DB_USERNAME_PROD,
    "password": process.env.DB_PASSWORD_PROD,
    "database": process.env.DB_PROD,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port": 35777
  }
}
