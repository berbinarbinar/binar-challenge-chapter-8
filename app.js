const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Binar Academy Chapter 8',
      version: '1.0.0',
      description: 'API documentation for fulfill the challenge task in binar',
      contact: {
        name: 'Pipin Angga Purnomo',
        email: 'heypurnomo@gmail.com'
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
app.use("/api", apiRouter)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})