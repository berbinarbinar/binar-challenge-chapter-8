const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

const swaggerUi = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Binar Academy Chapter 8',
      version: '1.0.0',
      description: 'API doc for Binar challenge Chapter 8',
      contact: {
        name: 'Kelvin Handoko'
      },
      servers: {
        url: `http://localhost:${process.env.PORT}`,
        description: 'development server'
      }
    }
  },
  apis: ['app.js', './server/**/*.js']
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @Routes /api
 * entrypoint for all API routes
 */

/**
 * @swagger
 * /api/v1:
 *  get:
 *    description: Use to be the entrypoint for /api/v1
 *    responses:
 *      200:
 *        description: test
 *  post:
 *    description: use to be post
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})