require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  // To define api which we create
  swaggerDefinition: {
    info: {
      title: 'Binar Academy Chapter 8 - Player Documentation',
      description: 'API documentation to fulfill the challenge task in Binar',
      contact: {
        name: 'Alex'
      },
      servers: [`http://localhost:${PORT}`]
    }
  },
  apis: ['app.js', './server/**/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @Routes /api
 * entrypoint for all API routes
 */

/**
 * @rules
 * Rules to write in swagger:
 *  1. indentation;
 *  2. To use different request methods in one route, we can use the same @swagger comment;
 *  3. If the router is different, for example useing parameter, we must use differrent @swagger comment; 
 */

/**
 * @swagger
 *  /api:
 *    get:
 *      description: Used as entry point for /api
 *      responses: 
 *        200:
 *          description: Test
 */


app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})


// Time Cap: 1.09.47