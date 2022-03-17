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
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(errorHandler)

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Binar Academy Chapter 8 - Player Documentations",
      description: "API documentation for fulfill the challenge task in binar",
      contact: {
        name: "icanq"
      },
      servers: ["http://localhost:4000"]
    }
  },
  apis: ["app.js", "./server/**/*.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/**
 * @Routes /api
 * entrypoint for all API routes
 */

/**
 * @rules
 * rules penulisan swagger
 * 1. indentasi haruslah baik
 * 2. dalam satu rute, namun ada request method berbeda bisa menggunakan dalam comment@swagger. yang sama
 * 3. apabila rute berbeda misal, harus pakai parameter /api/v1/players/:id, harus menggunakan comment@swagger. yang baru
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