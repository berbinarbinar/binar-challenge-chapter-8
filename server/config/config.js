require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_CHAPTER_8_DEV_USERNAME,
    "password": process.env.DB_CHAPTER_8_DEV_PASSWORD,
    "database": "c8-development",
    "host": process.env.DB_CHAPTER_8_DEV_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME_TEST,
    "password": process.env.DB_PASSWORD_TEST,
    "database": process.env.DB_TEST,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME_PROD,
    "password": process.env.DB_PASSWORD_PROD,
    "database": process.env.DB_PROD,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
