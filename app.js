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
app.use(errorHandler)

const swaggerOptions = {
  //untuk mendefinisikan API yang kita buat
  swaggerDefinition:{
    info: {
      title: "Jere - API Documentation with Swager on Chapter 8",
      description: "API documentation for fullfill the challenge task on Chapter 8",
      contact: {
        name: "JePra"
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
 * @swagger 
 * /api/v1/players:
 *  get:
 *    description: Use
 *    responses:
 *      200:
 *        description: Show All Players
 */
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})